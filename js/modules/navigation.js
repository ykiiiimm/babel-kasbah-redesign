// ==========================================
// MODULE: navigation.js — Header & Drawer
// Language switchers, mobile menu, smooth scroll & CTA
// ==========================================

// Header & mobile language switchers
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

// Mobile menu toggle, smooth scrolling & header CTA
function initNavigation() {
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
}