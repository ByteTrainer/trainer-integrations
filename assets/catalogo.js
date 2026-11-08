const search = document.querySelector('#game-search');
const entries = [...document.querySelectorAll('.catalog-list > li')];
const results = document.querySelector('#catalog-results');
const empty = document.querySelector('#catalog-empty');
const normalize = text => text.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLocaleLowerCase(document.documentElement.lang);

function filter() {
  const query = normalize(search.value.trim());
  let visible = 0;
  for (const entry of entries) {
    entry.hidden = !normalize(entry.querySelector('h2').textContent).includes(query);
    if (!entry.hidden) visible++;
  }
  results.textContent = visible + ' ' + (visible === 1 ? results.dataset.one : results.dataset.many);
  empty.hidden = visible > 0;
}

search.addEventListener('input', filter);
document.querySelector('#catalog-search').hidden = false;
filter();
