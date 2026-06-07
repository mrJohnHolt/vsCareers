const filters = { discipline: 'all', type: 'all', company: 'all' };

const jobList = document.getElementById('job-list');
const jobCards = jobList ? Array.from(jobList.querySelectorAll('.job-card')) : [];
const countEl = document.getElementById('jobs-visible-count');
const emptyEl = document.getElementById('jobs-empty');

function applyFilters() {
  let visible = 0;
  jobCards.forEach(card => {
    const match = Object.keys(filters).every(key => {
      return filters[key] === 'all' || card.dataset[key] === filters[key];
    });
    card.hidden = !match;
    if (match) visible++;
  });
  if (countEl) countEl.textContent = visible;
  if (emptyEl) emptyEl.hidden = visible > 0;
}

document.querySelectorAll('.filter-list').forEach(list => {
  const filterKey = list.dataset.filter;
  list.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    list.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filters[filterKey] = btn.dataset.value;
    applyFilters();
  });
});

function resetAll() {
  filters.discipline = 'all';
  filters.type = 'all';
  filters.company = 'all';
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.value === 'all');
  });
  applyFilters();
}

document.getElementById('filter-reset')?.addEventListener('click', resetAll);
document.getElementById('filter-reset-empty')?.addEventListener('click', resetAll);
