// Mobile experience controller: focused screens, navigation drawer and language sheet.
(function () {
  'use strict';

  const screenNames = ['home', 'analyses', 'visit', 'contact', 'info'];
  const screens = Object.fromEntries(screenNames.map(name => [name, document.getElementById(`view-${name}`)]));
  const header = document.getElementById('mobileHeader');
  const drawer = document.getElementById('mDrawer');
  const scrim = document.getElementById('mScrim');
  const menuButton = document.getElementById('mBurger');
  const closeButton = document.getElementById('dClose');
  const languageButton = document.getElementById('langChip');
  const languageSheet = document.getElementById('langSheet');
  const languageScrim = document.getElementById('langScrim');
  const languageLabel = document.getElementById('langLabel');
  const clearSearchButton = document.getElementById('sClearBtn');
  const searchInput = document.getElementById('analysisSearch');
  let currentScreen = 'home';

  function setScrollLock(locked) {
    document.body.classList.toggle('noscroll', locked);
  }

  function closeDrawer() {
    drawer?.classList.remove('on');
    scrim?.classList.remove('on');
    menuButton?.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    if (!languageSheet?.classList.contains('on')) setScrollLock(false);
  }

  function openDrawer() {
    drawer?.classList.add('on');
    scrim?.classList.add('on');
    menuButton?.classList.add('is-open');
    menuButton?.setAttribute('aria-expanded', 'true');
    setScrollLock(true);
  }

  function closeLanguageSheet() {
    languageSheet?.classList.remove('on');
    languageScrim?.classList.remove('on');
    if (!drawer?.classList.contains('on')) setScrollLock(false);
  }

  function openLanguageSheet() {
    languageSheet?.classList.add('on');
    languageScrim?.classList.add('on');
    setScrollLock(true);
  }

  function updateNavigation(name) {
    document.querySelectorAll('[data-view]').forEach(link => {
      link.classList.toggle('is-active', link.dataset.view === name);
      if (link.matches('a')) link.setAttribute('aria-current', link.dataset.view === name ? 'page' : 'false');
    });
  }

  function switchScreen(name, shouldScroll = true) {
    const target = screens[name] ? name : 'home';
    currentScreen = target;

    Object.entries(screens).forEach(([key, screen]) => {
      if (!screen) return;
      const active = key === target;
      screen.classList.toggle('is-active', active);
      screen.setAttribute('aria-hidden', active ? 'false' : 'true');
    });

    header?.classList.toggle('is-home', target === 'home');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', target === 'home' ? '#0b1328' : '#f5f6f8');
    updateNavigation(target);
    closeDrawer();

    if (shouldScroll) window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    if (target === 'analyses' && typeof renderAnalysisCards === 'function') renderAnalysisCards();
  }

  function routeFromHash() {
    const hash = window.location.hash.replace('#', '').trim();
    switchScreen(screenNames.includes(hash) ? hash : 'home');
  }

  function applyLanguage(language) {
    const lang = ['fr', 'ar', 'en'].includes(language) ? language : 'fr';
    localStorage.setItem('bkasbah_language', lang);
    if (typeof setLanguage === 'function') setLanguage(lang);
    if (languageLabel) languageLabel.textContent = lang.toUpperCase();
    document.querySelectorAll('[data-m-lang]').forEach(button => {
      const active = button.dataset.mLang === lang;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    closeLanguageSheet();
  }

  menuButton?.addEventListener('click', () => {
    drawer?.classList.contains('on') ? closeDrawer() : openDrawer();
  });
  closeButton?.addEventListener('click', closeDrawer);
  scrim?.addEventListener('click', closeDrawer);
  languageButton?.addEventListener('click', openLanguageSheet);
  languageScrim?.addEventListener('click', closeLanguageSheet);

  document.querySelectorAll('[data-m-lang]').forEach(button => {
    button.addEventListener('click', () => applyLanguage(button.dataset.mLang));
  });

  document.addEventListener('click', event => {
    const routeLink = event.target.closest('a[href^="#"]');
    if (!routeLink) return;
    const name = routeLink.getAttribute('href').slice(1);
    if (!screenNames.includes(name)) return;
    event.preventDefault();
    if (window.location.hash === `#${name}`) {
      switchScreen(name);
    } else {
      window.location.hash = name;
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    closeDrawer();
    closeLanguageSheet();
  });

  searchInput?.addEventListener('input', () => {
    clearSearchButton?.classList.toggle('show', Boolean(searchInput.value));
  });
  clearSearchButton?.addEventListener('click', () => {
    if (!searchInput) return;
    searchInput.value = '';
    clearSearchButton.classList.remove('show');
    if (typeof renderAnalysisCards === 'function') renderAnalysisCards();
    searchInput.focus();
  });

  document.querySelectorAll('.faq-q').forEach(button => {
    button.addEventListener('click', () => {
      const opening = button.getAttribute('aria-expanded') !== 'true';
      document.querySelectorAll('.faq-q').forEach(item => item.setAttribute('aria-expanded', 'false'));
      button.setAttribute('aria-expanded', String(opening));
    });
  });

  const savedLanguage = localStorage.getItem('bkasbah_language') || 'fr';
  applyLanguage(savedLanguage);
  window.addEventListener('hashchange', routeFromHash);
  routeFromHash();
})();
