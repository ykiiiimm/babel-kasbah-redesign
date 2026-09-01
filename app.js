// Reveal & counter animations
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

// Analysis search and filter chips
const search = document.getElementById('analysisSearch');
const cards = [...document.querySelectorAll('.analysis-card')];
const chips = [...document.querySelectorAll('.chip')];
let filter = 'all';

function render() {
  const q = (search?.value || '').toLowerCase().trim();
  cards.forEach(c => {
    const okFilter = filter === 'all' || c.dataset.category === filter;
    const okQuery = !q || c.dataset.name.includes(q);
    c.classList.toggle('hidden', !(okFilter && okQuery));
  });
}

search?.addEventListener('input', render);

chips.forEach(ch =>
  ch.addEventListener('click', () => {
    chips.forEach(x => x.classList.remove('active'));
    ch.classList.add('active');
    filter = ch.dataset.filter;
    render();
  })
);

document.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    search?.focus();
  }
});

// FAQ Accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !isExpanded);
  });
});

// Mobile navigation toggle & Smooth scrolling
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.classList.toggle('is-active', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
  });
}

// Smooth scroll for internal links including header "Résultats" link & Logo
document.querySelectorAll('a[href^="#"], .brand').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (targetId === '#top' || link.classList.contains('brand')) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (nav && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
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

        if (nav && nav.classList.contains('is-open')) {
          nav.classList.remove('is-open');
          menuToggle?.classList.remove('is-active');
          menuToggle?.setAttribute('aria-expanded', 'false');
        }
      }
    }
  });
});

// Header button "Prendre rendez-vous" scroll to contact section
const learnMoreBtn = document.querySelector('.learn-more');
if (learnMoreBtn) {
  learnMoreBtn.addEventListener('click', () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
