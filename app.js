// ==========================================
// LABORATOIRE BAB EL KASBAH — APPLICATION CORE
// ==========================================
// This coordinator loads and initializes every module from js/modules/.
// Load order (see index.html): translations.js → js/modules/*.js → app.js
// - i18n.js        exports: setLanguage, getTranslation, currentLang
// - onboarding.js  exports: initOnboarding
// - navigation.js  exports: initLanguageSwitchers, initNavigation
// - analyses.js    exports: renderAnalysisCards (auto-wires search UI)
// - faq.js         auto-wires accordion behavior
// - stats.js       auto-wires reveal & counter animations
// - contact.js     auto-wires form validation & WhatsApp submission
// ==========================================

// Module collaborators list with their required bootstrapping hooks.
const modules = {
// onboarding: () => initOnboarding(),
  languageSwitchers: () => initLanguageSwitchers(),
  navigation: () => initNavigation(),
};

function scaffold() {
  Object.values(modules).forEach(init => {
    if (typeof init === 'function') init();
  });
}

// Initialization
document.addEventListener('DOMContentLoaded', scaffold);

// Run immediately as well if DOM already ready
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  scaffold();
}