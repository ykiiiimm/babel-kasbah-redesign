// ==========================================
// MODULE: navigation.js — Header & Drawer
// Language switchers, mobile menu, smooth scroll & CTA
// ==========================================

// Header & mobile language switchers
function initLanguageSwitchers() {
  const toggle = document.getElementById('langToggle');
  const menu = document.getElementById('langMenu');

  if (toggle && menu) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = menu.classList.contains('show');
      if (isOpen) {
        menu.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        menu.classList.add('show');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });

    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.querySelectorAll('.ls-btn, .mls-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-ls');
      if (lang && translations[lang]) {
        const loader = document.getElementById('languageLoader');
        if (loader) {
          loader.style.display = 'flex';
          setTimeout(() => {
            localStorage.setItem('bkasbah_language', lang);
            setLanguage(lang);
            setTimeout(() => {
              loader.style.display = 'none';
            }, 750); // Minimum time to show loader animation
          }, 50);
        } else {
          localStorage.setItem('bkasbah_language', lang);
          setLanguage(lang);
        }

        if (menu) {
          menu.classList.remove('show');
          if (toggle) toggle.setAttribute('aria-expanded', 'false');
        }

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