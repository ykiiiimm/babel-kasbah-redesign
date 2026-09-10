// ==========================================
// LABORATOIRE BAB EL KASBAH - APPLICATION CORE
// ==========================================

// Global state
let currentLang = 'fr';

// Helper: safe nested translation lookup
function getTranslation(lang, path) {
  const keys = path.split('.');
  let val = translations[lang];
  for (const k of keys) {
    if (val && val[k] !== undefined) {
      val = val[k];
    } else {
      val = undefined;
      break;
    }
  }
  // Fallback to French if not found
  if (val === undefined && lang !== 'fr') {
    let fallback = translations.fr;
    for (const k of keys) {
      if (fallback && fallback[k] !== undefined) {
        fallback = fallback[k];
      } else {
        fallback = undefined;
        break;
      }
    }
    return fallback;
  }
  return val;
}

// ------------------------------------------
// 1. Language Engine & UI Localization
// ------------------------------------------
function setLanguage(lang) {
  if (!translations[lang]) lang = 'fr';
  currentLang = lang;

  const isRtl = lang === 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir = isRtl ? 'rtl' : 'ltr';

  // Update Page Title & Description
  const titleEl = document.getElementById('pageTitle');
  if (titleEl && translations[lang]?.meta?.title) {
    titleEl.textContent = translations[lang].meta.title;
  }
  const descEl = document.getElementById('pageDescription');
  if (descEl && translations[lang]?.meta?.description) {
    descEl.setAttribute('content', translations[lang].meta.description);
  }

  // Update Text Nodes [data-i18n]
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = getTranslation(lang, key);
    if (text !== undefined) {
      el.innerHTML = text;
    }
  });

  // Update Input Placeholders [data-i18n-placeholder]
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const text = getTranslation(lang, key);
    if (text !== undefined) {
      el.placeholder = text;
    }
  });

  // Update Image Alt [data-i18n-alt]
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt');
    const text = getTranslation(lang, key);
    if (text !== undefined) {
      el.alt = text;
    }
  });

  // Update Aria Labels [data-i18n-aria]
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    const text = getTranslation(lang, key);
    if (text !== undefined) {
      el.setAttribute('aria-label', text);
    }
  });

  // Update Titles [data-i18n-title]
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    const text = getTranslation(lang, key);
    if (text !== undefined) {
      el.title = text;
    }
  });

  // Update Select Dropdown Options [data-i18n-select]
  document.querySelectorAll('[data-i18n-select]').forEach(select => {
    const key = select.getAttribute('data-i18n-select');
    const options = getTranslation(lang, key);
    if (Array.isArray(options)) {
      const selectedIndex = select.selectedIndex >= 0 ? select.selectedIndex : 0;
      select.innerHTML = '';
      options.forEach(optText => {
        const opt = document.createElement('option');
        opt.textContent = optText;
        select.appendChild(opt);
      });
      if (selectedIndex < options.length) {
        select.selectedIndex = selectedIndex;
      }
    }
  });

  // Update Ticker items [data-ticker-index]
  const tickerItems = translations[lang]?.ticker || [];
  document.querySelectorAll('[data-ticker-index]').forEach(el => {
    const idx = parseInt(el.getAttribute('data-ticker-index'), 10);
    if (tickerItems[idx] !== undefined) {
      el.textContent = tickerItems[idx];
    }
  });

  // Update Analysis Cards (Titles, bodies, codes & search keywords)
  const cardsData = translations[lang]?.analyses?.cards || [];
  document.querySelectorAll('.analysis-card').forEach(card => {
    const idx = parseInt(card.getAttribute('data-card-index'), 10);
    if (!isNaN(idx) && cardsData[idx]) {
      const item = cardsData[idx];
      const codeEl = card.querySelector('.analysis-code');
      const titleEl = card.querySelector('h3');
      const bodyEl = card.querySelector('p');
      if (codeEl) codeEl.textContent = item.code;
      if (titleEl) titleEl.textContent = item.title;
      if (bodyEl) bodyEl.textContent = item.body;
      card.dataset.name = (item.title + ' ' + item.code + ' ' + item.searchKeywords).toLowerCase();
    }
  });

  // Update Patient Reviews
  const reviewsData = translations[lang]?.voices?.reviews || [];
  document.querySelectorAll('.voice-card').forEach((card, idx) => {
    if (reviewsData[idx]) {
      const bq = card.querySelector('blockquote');
      const author = card.querySelector('.voice-meta strong');
      const role = card.querySelector('.voice-meta span');
      if (bq) bq.textContent = reviewsData[idx].quote;
      if (author) author.textContent = reviewsData[idx].author;
      if (role) role.textContent = reviewsData[idx].role;
    }
  });

  // Update FAQ Questions and Answers
  const faqData = translations[lang]?.faq?.items || [];
  document.querySelectorAll('.faq-item').forEach((item, idx) => {
    if (faqData[idx]) {
      const btn = item.querySelector('.faq-q');
      const ans = item.querySelector('.faq-a p');
      if (btn) {
        btn.innerHTML = `${faqData[idx].q}<span class="faq-icon">＋</span>`;
      }
      if (ans) ans.textContent = faqData[idx].a;
    }
  });

  // Update Header Language Switcher Buttons
  document.querySelectorAll('.ls-btn, .mls-btn').forEach(btn => {
    const l = btn.getAttribute('data-ls');
    const active = l === lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });

  // Update Onboarding list rows if visible
  document.querySelectorAll('.lang-row').forEach(row => {
    const l = row.getAttribute('data-lang');
    const selected = l === lang;
    row.classList.toggle('is-selected', selected);
    row.setAttribute('aria-checked', selected ? 'true' : 'false');
  });

  // Update Onboarding texts
  const ob = translations[lang]?.onboarding;
  if (ob) {
    const welcome = document.getElementById('obWelcome');
    const choose = document.getElementById('obChoose');
    const continueBtn = document.getElementById('obContinueText');
    const tagline = document.getElementById('obTagline');
    if (welcome) welcome.textContent = ob.welcome;
    if (choose) choose.textContent = ob.chooseLanguage;
    if (continueBtn) continueBtn.textContent = ob.continue;
    if (tagline) tagline.textContent = ob.tagline;
  }

  // Update Directional Arrows
  const dirArrow = isRtl ? '←' : '→';
  document.querySelectorAll('.ob-arrow').forEach(a => a.textContent = dirArrow);

  // Re-run search/filter to ensure UI matches translated search terms
  renderAnalysisCards();
}

// ------------------------------------------
// 2. Onboarding Lifecycle
// ------------------------------------------
function initOnboarding() {
  const overlay = document.getElementById('onboardingOverlay');
  if (!overlay) return;

  const savedLang = localStorage.getItem('bkasbah_language');
  const onboardingDone = localStorage.getItem('bkasbah_onboarding_completed');

  // Determine initial language
  let initialLang = 'fr';
  if (savedLang && translations[savedLang]) {
    initialLang = savedLang;
  } else {
    // Browser language detection
    const navLang = (navigator.language || '').toLowerCase();
    if (navLang.startsWith('ar')) initialLang = 'ar';
    else if (navLang.startsWith('en')) initialLang = 'en';
  }

  setLanguage(initialLang);

  if (onboardingDone === 'true') {
    // Returning visitor: directly into website without interruption
    overlay.classList.add('is-hidden');
    return;
  }

  // First time visitor: interactive selection
  let chosenLang = initialLang;

  const langRows = document.querySelectorAll('.lang-row');
  langRows.forEach(row => {
    row.addEventListener('click', () => {
      const l = row.getAttribute('data-lang');
      if (l && translations[l]) {
        chosenLang = l;
        setLanguage(chosenLang);
      }
    });
  });

  const continueBtn = document.getElementById('obContinue');
  if (continueBtn) {
    continueBtn.addEventListener('click', () => {
      localStorage.setItem('bkasbah_language', chosenLang);
      localStorage.setItem('bkasbah_onboarding_completed', 'true');
      setLanguage(chosenLang);

      // Smooth, elegant exit animation (600ms)
      overlay.classList.add('is-closing');
      setTimeout(() => {
        overlay.classList.add('is-hidden');
      }, 650);
    });
  }
}

// ------------------------------------------
// 3. Header & Mobile Language Switchers
// ------------------------------------------
function initLanguageSwitchers() {
  document.querySelectorAll('.ls-btn, .mls-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-ls');
      if (lang && translations[lang]) {
        localStorage.setItem('bkasbah_language', lang);
        setLanguage(lang);

        // Close mobile drawer if open
        const nav = document.querySelector('.nav');
        const menuToggle = document.querySelector('.menu-toggle');
        if (nav && nav.classList.contains('is-open')) {
          nav.classList.remove('is-open');
          menuToggle?.classList.remove('is-active');
          menuToggle?.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });
}

// ------------------------------------------
// 4. Reveal & Counter Animations
// ------------------------------------------
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.classList.contains('show')) {
        e.target.classList.add('show');
        const counter = e.target.querySelector('[data-count]');
        if (counter) {
          const target = +counter.getAttribute('data-count');
          const suffix = counter.getAttribute('data-suffix') || '';
          let count = 0;
          const updateCount = () => {
            const inc = target / 40;
            if (count < target) {
              count += inc;
              counter.innerText = Math.ceil(count) + suffix;
              setTimeout(updateCount, 40);
            } else {
              counter.innerText = target + suffix;
            }
          };
          updateCount();
        }
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ------------------------------------------
// 5. Analysis Search, Filters & Empty State
// ------------------------------------------
const searchInput = document.getElementById('analysisSearch');
const filterChips = [...document.querySelectorAll('.chip')];
const emptyState = document.getElementById('analysesEmpty');
const resetSearchBtn = document.getElementById('analysesReset');
let activeCategory = 'all';

function renderAnalysisCards() {
  const cards = [...document.querySelectorAll('.analysis-card')];
  const q = (searchInput?.value || '').toLowerCase().trim();
  let visibleCount = 0;

  cards.forEach(card => {
    const okCategory = activeCategory === 'all' || card.dataset.category === activeCategory;
    const okQuery = !q || (card.dataset.name || '').includes(q);
    const visible = okCategory && okQuery;
    card.classList.toggle('hidden', !visible);
    if (visible) visibleCount++;
  });

  if (emptyState) {
    emptyState.classList.toggle('hidden', visibleCount > 0);
  }
}

searchInput?.addEventListener('input', renderAnalysisCards);

filterChips.forEach(chip => {
  chip.addEventListener('click', () => {
    filterChips.forEach(x => x.classList.remove('active'));
    chip.classList.add('active');
    activeCategory = chip.dataset.filter;
    renderAnalysisCards();
  });
});

if (resetSearchBtn) {
  resetSearchBtn.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    filterChips.forEach(x => x.classList.toggle('active', x.dataset.filter === 'all'));
    activeCategory = 'all';
    renderAnalysisCards();
  });
}

document.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    searchInput?.focus();
  }
});

// ------------------------------------------
// 6. FAQ Accordion
// ------------------------------------------
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !isExpanded);
  });
});

// ------------------------------------------
// 7. Mobile Navigation & Smooth Scroll
// ------------------------------------------
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    menuToggle.classList.toggle('is-active', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
  });
}

document.querySelectorAll('a[href^="#"], .brand').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (targetId === '#top' || link.classList.contains('brand')) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (mainNav && mainNav.classList.contains('is-open')) {
        mainNav.classList.remove('is-open');
        menuToggle?.classList.remove('is-active');
        menuToggle?.setAttribute('aria-expanded', 'false');
      }
      return;
    }

    if (targetId && targetId !== '#') {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });

        if (mainNav && mainNav.classList.contains('is-open')) {
          mainNav.classList.remove('is-open');
          menuToggle?.classList.remove('is-active');
          menuToggle?.setAttribute('aria-expanded', 'false');
        }
      }
    }
  });
});

// Header CTA button: scroll to contact
const headerCtaBtn = document.querySelector('.learn-more');
if (headerCtaBtn) {
  headerCtaBtn.addEventListener('click', () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// ------------------------------------------
// 8. Contact Form: WhatsApp to 0775210035
// ------------------------------------------
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById('contactName')?.value.trim() || 'Non précisé';
    const phone = document.getElementById('contactPhone')?.value.trim() || 'Non précisé';
    const subject = document.getElementById('contactSubject')?.value.trim() || 'Demande';
    const message = document.getElementById('contactMessage')?.value.trim() || '';

    const t = translations[currentLang]?.whatsappTemplate || translations.fr.whatsappTemplate;

    const text = `${t.header}\n\n` +
      `*${t.name}:* ${name}\n` +
      `*${t.phone}:* ${phone}\n` +
      `*${t.subject}:* ${subject}\n` +
      `*${t.message}:* ${message}`;

    const targetPhone = '212775210035'; // 0775210035
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`;

    const submitBtn = document.getElementById('contactSubmit');
    if (submitBtn) {
      const originalHtml = submitBtn.innerHTML;
      const sendingText = translations[currentLang]?.contact?.formSending || 'Ouverture WhatsApp...';
      submitBtn.innerHTML = `${sendingText} <span>✓</span>`;
      submitBtn.disabled = true;
      setTimeout(() => {
        submitBtn.innerHTML = originalHtml;
        submitBtn.disabled = false;
      }, 2500);
    }

    window.open(whatsappUrl, '_blank');
  });
}

// ------------------------------------------
// Initialization
// ------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initOnboarding();
  initLanguageSwitchers();
});

// Run immediately as well if DOM already ready
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  initOnboarding();
  initLanguageSwitchers();
}
