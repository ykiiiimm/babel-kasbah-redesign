// ==========================================
// MODULE: onboarding.js — Onboarding Lifecycle
// Language pills, double-click entry & smooth exit
// ==========================================

function initOnboarding() {
  const overlay = document.getElementById('onboardingOverlay');
  if (!overlay) return;

  const savedLang = localStorage.getItem('bkasbah_language');
  const onboardingDone = localStorage.getItem('bkasbah_onboarding_completed');
  const urlParams = new URLSearchParams(window.location.search);
  const forceOnboarding = urlParams.has('onboarding') || window.location.hash === '#welcome';

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

  let chosenLang = initialLang;
  setLanguage(chosenLang);

  if (onboardingDone === 'true' && !forceOnboarding) {
    // Returning visitor: skip onboarding
    overlay.classList.add('is-hidden');
    return;
  }

  function completeOnboarding() {
    localStorage.setItem('bkasbah_language', chosenLang);
    localStorage.setItem('bkasbah_onboarding_completed', 'true');
    setLanguage(chosenLang);

    // Elegant exit animation
    overlay.classList.add('is-closing');
    setTimeout(() => {
      overlay.classList.add('is-hidden');
    }, 600);
  }

  // Language pill button selection & interactions
  const langBtns = Array.from(overlay.querySelectorAll('.ob-lang-btn'));
  langBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const l = btn.getAttribute('data-lang');
      if (l && translations[l]) {
        if (chosenLang === l) {
          // Second click on the active language directly enters
          completeOnboarding();
          return;
        }
        chosenLang = l;
        setLanguage(chosenLang);
      }
    });

    // Double-click fast entry
    btn.addEventListener('dblclick', () => {
      const l = btn.getAttribute('data-lang');
      if (l && translations[l]) {
        chosenLang = l;
        setLanguage(chosenLang);
      }
      completeOnboarding();
    });

    // Keyboard navigation: Enter / Space and ArrowUp / ArrowDown
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const l = btn.getAttribute('data-lang');
        if (l && translations[l]) {
          chosenLang = l;
          setLanguage(chosenLang);
        }
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        const nextIndex = (index + 1) % langBtns.length;
        langBtns[nextIndex].focus();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevIndex = (index - 1 + langBtns.length) % langBtns.length;
        langBtns[prevIndex].focus();
      }
    });
  });

  const continueBtn = document.getElementById('obContinue');
  if (continueBtn) {
    continueBtn.addEventListener('click', completeOnboarding);
  }
}