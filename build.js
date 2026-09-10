// ============================================================
// build.js — 1-command assembly of index.html from components/
// ------------------------------------------------------------
// Usage:
//   node build.js             # one-shot build
//   node build.js --watch     # rebuild on every change in components/
//   npm run build / npm run watch
//
// Zero external dependencies (Node.js built-ins only).
// index.html works both offline (file://) and when hosted.
// ============================================================

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const COMPONENTS_DIR = path.join(ROOT, 'components');
const COMPONENT_TOKEN = /<!-- @@COMPONENT:([a-zA-Z0-9_-]+)@@ -->/g;

// ------------------------------------------------------------
// Shell template — the assembled production entry point.
// Component partials are injected at their marker comments.
// ------------------------------------------------------------
const SHELL = `<!doctype html>
<html lang="fr" dir="ltr">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title id="pageTitle">Laboratoire BAB EL KASBAH — Biologie médicale · Dr. CHELLAOUI Said</title>
  <meta id="pageDescription" name="description"
    content="Laboratoire BAB EL KASBAH à Taroudant — Dr. CHELLAOUI Said, spécialiste en biologie clinique. Analyses médicales de pointe, plateau technique moderne et espace patient." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&family=Tajawal:wght@400;500;700;800&display=swap"
    rel="stylesheet">
  <link rel="stylesheet" href="styles.css" />
</head>

<body>
  <!-- ============ ONBOARDING EXPERIENCE ============ -->
<!-- @@COMPONENT:onboarding@@ -->

  <div class="noise"></div>

  <!-- ============ SITE HEADER & NAVIGATION ============ -->
<!-- @@COMPONENT:header@@ -->

  <main>
    <!-- ============ HERO ============ -->
<!-- @@COMPONENT:hero@@ -->
    <!-- ============ TICKER ============ -->
<!-- @@COMPONENT:ticker@@ -->
    <!-- ============ 01 EXPERTISE ============ -->
<!-- @@COMPONENT:expertise@@ -->
    <!-- ============ 02 ANALYSES ============ -->
<!-- @@COMPONENT:analyses@@ -->
    <!-- ============ 03 TEAM & DIRECTION ============ -->
<!-- @@COMPONENT:team@@ -->
    <!-- ============ RESULTS & PATIENT SPACE ============ -->
<!-- @@COMPONENT:results@@ -->
    <!-- ============ 04 VOIX DE PATIENTS ============ -->
<!-- @@COMPONENT:voices@@ -->
    <!-- ============ 05 FAQ ============ -->
<!-- @@COMPONENT:faq@@ -->
    <!-- ============ 06 CONTACT ============ -->
<!-- @@COMPONENT:contact@@ -->
    <!-- ============ 07 LOCALISATION / MAP ============ -->
<!-- @@COMPONENT:map@@ -->
  </main>

  <!-- ============ SITE FOOTER ============ -->
<!-- @@COMPONENT:footer@@ -->

  <script src="translations.js"></script>
  <script src="js/modules/i18n.js"></script>
  <script src="js/modules/onboarding.js"></script>
  <script src="js/modules/navigation.js"></script>
  <script src="js/modules/analyses.js"></script>
  <script src="js/modules/faq.js"></script>
  <script src="js/modules/stats.js"></script>
  <script src="js/modules/contact.js"></script>
  <script src="app.js"></script>
</body>

</html>
`;

// ------------------------------------------------------------
// Component loader
// ------------------------------------------------------------
function readComponent(name) {
  const file = path.join(COMPONENTS_DIR, `${name}.html`);
  if (!fs.existsSync(file)) {
    console.error(`  [build] Missing component: components/${name}.html`);
    return '';
  }
  return fs.readFileSync(file, 'utf8').trim();
}

// ------------------------------------------------------------
// Build — stitch components into index.html
// ------------------------------------------------------------
function build() {
  let injected = 0;
  const missing = [];
  const html = SHELL.replace(COMPONENT_TOKEN, (match, name) => {
    injected++;
    const content = readComponent(name);
    if (content === '') missing.push(name);
    return content;
  });

  fs.writeFileSync(path.join(ROOT, 'index.html'), html, 'utf8');
  console.log(`  [build] index.html assembled from ${injected} component(s).`);
  if (missing.length > 0) {
    console.warn(`  [build] WARNING: empty/missing components: ${missing.join(', ')}`);
  }
  return injected;
}

// ------------------------------------------------------------
// Watch mode — rebuild whenever a component file changes
// ------------------------------------------------------------
function watch() {
  console.log('  [watch] Watching components/*.html … (Ctrl+C to stop)');
  let building = false;
  let pending = false;

  const rebuild = () => {
    if (building) {
      pending = true;
      return;
    }
    building = true;
    const start = Date.now();
    build();
    console.log(`  [watch] Rebuilt in ${Date.now() - start} ms — ${new Date().toLocaleTimeString()}`);
    building = false;
    if (pending) {
      pending = false;
      rebuild();
    }
  };

  rebuild();

  let timeout = null;
  const debounce = () => {
    clearTimeout(timeout);
    timeout = setTimeout(rebuild, 250);
  };

  try {
    fs.watch(COMPONENTS_DIR, { recursive: false }, debounce);
  } catch (err) {
    console.error(`  [watch] fs.watch unavailable on this Node version (${process.version}).`);
    console.error('  [watch] Falling back to polling every 500 ms.');
    let last = snapshot();
    setInterval(() => {
      const next = snapshot();
      if (next !== last) {
        last = next;
        rebuild();
      }
    }, 500);
  }
}

function snapshot() {
  return fs.readdirSync(COMPONENTS_DIR)
    .filter(f => f.endsWith('.html'))
    .map(f => `${f}:${fs.statSync(path.join(COMPONENTS_DIR, f)).mtimeMs}`)
    .join('|');
}

// ------------------------------------------------------------
// Entry point
// ------------------------------------------------------------
const watchMode = process.argv.includes('--watch') || process.argv.includes('-w');
if (watchMode) {
  watch();
} else {
  build();
}