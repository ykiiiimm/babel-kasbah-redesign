// ==========================================
// MODULE: stats.js — Reveal & Counter Animation
// IntersectionObserver count-up animation
// ==========================================

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