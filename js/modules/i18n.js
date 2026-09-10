// ==========================================
// MODULE: i18n.js — Multilingual Engine
// Translation sync, RTL handler & shared state
// ==========================================

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

// Central language switch: applies the whole localized UI
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

  // Update Onboarding language buttons if visible
  document.querySelectorAll('.ob-lang-btn').forEach(btn => {
    const l = btn.getAttribute('data-lang');
    const selected = l === lang;
    btn.classList.toggle('is-selected', selected);
    btn.setAttribute('aria-checked', selected ? 'true' : 'false');
  });

  // Update Onboarding texts
  const ob = translations[lang]?.onboarding;
  if (ob) {
    const choose = document.getElementById('obChoose');
    const continueBtn = document.getElementById('obContinueText');
    const tagline = document.getElementById('obTagline');
    const kicker = document.getElementById('obKicker');
    const subtitle = document.getElementById('obSubtitle');
    const badgeTitle = document.getElementById('obBadgeTitle');
    const badgeSub = document.getElementById('obBadgeSub');
    const descFr = document.getElementById('obDescFr');
    const descAr = document.getElementById('obDescAr');
    const descEn = document.getElementById('obDescEn');

    if (choose) choose.textContent = ob.chooseLanguage;
    if (continueBtn) continueBtn.textContent = ob.continue || 'Accéder au site';
    if (tagline) tagline.textContent = ob.tagline;
    if (kicker && ob.kicker) kicker.textContent = ob.kicker;
    if (subtitle && ob.subtitle) subtitle.textContent = ob.subtitle;
    if (badgeTitle && ob.badgeTitle) badgeTitle.textContent = ob.badgeTitle;
    if (badgeSub && ob.badgeSub) badgeSub.textContent = ob.badgeSub;
    if (descFr && ob.frDesc) descFr.textContent = ob.frDesc;
    if (descAr && ob.arDesc) descAr.textContent = ob.arDesc;
    if (descEn && ob.enDesc) descEn.textContent = ob.enDesc;
  }

  // Update Directional Arrows
  const dirArrow = isRtl ? '←' : '→';
  document.querySelectorAll('.ob-arrow, [data-dir-arrow]').forEach(a => a.textContent = dirArrow);

  // Re-run search/filter to ensure UI matches translated search terms
  renderAnalysisCards();
}