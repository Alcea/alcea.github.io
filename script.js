const state = {
  query: '',
  activeId: null
};

const indexPane = document.getElementById('indexPane');
const detailPane = document.getElementById('detailPane');
const searchInput = document.getElementById('searchInput');
const countBadge = document.getElementById('countBadge');

function getFilteredMonsters(){
  return MONSTERS.filter(m => {
    if(state.query){
      const q = state.query.toLowerCase();
      const haystack = (m.name + ' ' + m.locations.join(' ')).toLowerCase();
      if(!haystack.includes(q)) return false;
    }
    return true;
  });
}

function renderIndex(){
  const list = getFilteredMonsters();
  countBadge.textContent = `${list.length} / ${MONSTERS.length} entries`;

  if(list.length === 0){
    indexPane.innerHTML = `<div class="index-empty">No monsters match your search. Try a different name or location.</div>`;
    return;
  }

  if(!state.activeId || !list.find(m => m.id === state.activeId)){
    state.activeId = list[0].id;
  }

  indexPane.innerHTML = list.map(m => `
    <div class="index-item ${m.id === state.activeId ? 'active' : ''}" data-id="${m.id}">
      <span class="name">${m.name.replace(/^PLACEHOLDER — /, '')}</span>
      <span class="lv">Lv ${m.level}</span>
    </div>
  `).join('');

  document.querySelectorAll('.index-item').forEach(item => {
    item.addEventListener('click', () => {
      state.activeId = item.dataset.id;
      renderIndex();
      renderDetail();
    });
  });
}

function imageBlock({ src, alt, placeholderTitle, placeholderText }){
  if(src){
    return `<img class="info-image" src="${src}" alt="${alt}">`;
  }
  return `
    <div class="info-placeholder">
      <span class="info-placeholder-sigil">?</span>
      <div class="info-placeholder-text">
        <strong>${placeholderTitle}</strong>
        <span>${placeholderText}</span>
      </div>
    </div>
  `;
}

function renderDetail(){
  const m = MONSTERS.find(x => x.id === state.activeId);
  if(!m){
    detailPane.innerHTML = `<div class="detail-empty">Select a monster from the list to view its entry.</div>`;
    return;
  }

  const cleanName = m.name.replace(/^PLACEHOLDER — /, '');

  detailPane.innerHTML = `
    <div class="monster-card">
      <div class="image-block-wrap">
        ${imageBlock({
          src: m.image,
          alt: `${cleanName} info card`,
          placeholderTitle: cleanName,
          placeholderText: "No info card image yet — drop in a screenshot of the monster's in-game window here (portrait, LV/HP/MP/ATK/DEF/SPD, and its drop table)."
        })}
      </div>

      <div class="section">
        <h3>Locations</h3>
        <ul class="loc-list">
          ${m.locations.map(l => `<li>${l}</li>`).join('') || '<li class="muted">Unknown</li>'}
        </ul>
      </div>

      ${m.notes ? `
      <div class="section">
        <h3>Notes</h3>
        <p class="muted">${m.notes}</p>
      </div>` : ''}
    </div>
  `;
}

function renderAll(){
  renderIndex();
  renderDetail();
}

searchInput.addEventListener('input', (e) => {
  state.query = e.target.value.trim();
  renderIndex();
  renderDetail();
});

renderAll();
