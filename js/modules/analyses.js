// ==========================================
// MODULE: analyses.js — Search, Filters & Empty State
// ==========================================

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