// ---------- Helpers ----------
const $main = document.getElementById('main');
const $catNav = document.getElementById('categoryNav');
const $search = document.getElementById('searchInput');

function catOf(id){ return WIKI_DATA.categories.find(c => c.id === id); }
function articlesOf(catId){
  return Object.entries(WIKI_DATA.articles).filter(([,a]) => a.cat === catId);
}
function iconStyle(icon, size){
  return `background:
    linear-gradient(160deg, ${icon.top} 0 40%, ${icon.side} 40% 78%, ${icon.base} 78% 100%);`;
}
function escapeHtml(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ---------- Sidebar nav ----------
function renderCategoryNav(activeCat){
  $catNav.innerHTML = WIKI_DATA.categories.map(c => {
    const count = articlesOf(c.id).length;
    const active = activeCat === c.id ? 'active' : '';
    return `<li class="nav-item ${active}" onclick="navigate('cat', '${c.id}')">
      <span class="nav-swatch" style="background:${c.color}"></span>
      ${c.label}
      <span class="nav-count">${count}</span>
    </li>`;
  }).join('');
}

// ---------- Card / chip builders ----------
function cardHtml(id, a){
  const c = catOf(a.cat);
  return `<div class="card" onclick="navigate('article','${id}')">
    <div class="icon" style="${iconStyle(a.icon)}"></div>
    <div>
      <div class="card-tag" style="color:${c.color}">${c.label}</div>
      <div class="card-title">${a.title}</div>
      <div class="card-tagline">${a.tagline}</div>
    </div>
  </div>`;
}

function chipHtml(id){
  const a = WIKI_DATA.articles[id];
  if(!a) return '';
  const c = catOf(a.cat);
  return `<div class="chip" onclick="navigate('article','${id}')">
    <span class="dot" style="background:${c.color}"></span>${a.title}
  </div>`;
}

// ---------- Views ----------
function renderHome(){
  const total = Object.keys(WIKI_DATA.articles).length;
  $main.innerHTML = `
    <div class="hero">
      <div class="hero-eyebrow">Enciclopédia não-oficial</div>
      <h1 class="pixel" style="font-size:15px;">A wiki de bolso<br>do Overworld ao End.</h1>
      <p class="sub">Blocos, mobs, itens, biomas, dimensões e mecânicas — tudo reunido em um único lugar, sem anúncios e sem popups.</p>
      <div class="hero-stats">
        <div class="hero-stat"><b>${total}</b><span>ARTIGOS</span></div>
        <div class="hero-stat"><b>${WIKI_DATA.categories.length}</b><span>CATEGORIAS</span></div>
        <div class="hero-stat"><b>100%</b><span>ESTÁTICO</span></div>
      </div>
      <button class="btn-random" onclick="goRandom()">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="7" cy="7" r="1"/><circle cx="17" cy="17" r="1"/><circle cx="7" cy="17" r="1"/><circle cx="17" cy="7" r="1"/><circle cx="12" cy="12" r="1"/></svg>
        Artigo aleatório
      </button>
    </div>

    ${WIKI_DATA.categories.map(c => `
      <div class="section-title">${c.label}</div>
      <div class="grid">
        ${articlesOf(c.id).map(([id,a]) => cardHtml(id,a)).join('')}
      </div>
    `).join('')}
  `;
  renderCategoryNav(null);
}

function renderCategory(catId){
  const c = catOf(catId);
  if(!c) return renderHome();
  const arts = articlesOf(catId);
  $main.innerHTML = `
    <div class="crumbs"><a onclick="navigate('home')" style="cursor:pointer">Início</a><span class="sep">/</span>${c.label}</div>
    <div class="section-title" style="margin-top:6px;">${c.label} <span style="text-transform:none; letter-spacing:0; color:var(--muted); font-size:11px;">(${arts.length})</span></div>
    <div class="grid">
      ${arts.map(([id,a]) => cardHtml(id,a)).join('')}
    </div>
  `;
  renderCategoryNav(catId);
}

function renderArticle(id){
  const a = WIKI_DATA.articles[id];
  if(!a) return renderHome();
  const c = catOf(a.cat);
  $main.innerHTML = `
    <div class="crumbs">
      <a onclick="navigate('home')" style="cursor:pointer">Início</a><span class="sep">/</span>
      <a onclick="navigate('cat','${a.cat}')" style="cursor:pointer">${c.label}</a><span class="sep">/</span>
      ${a.title}
    </div>

    <div class="article-head">
      <div class="article-title">
        <span class="tag">${c.label}</span>
        <h1>${a.title}</h1>
        <p class="article-tagline">${a.tagline}</p>
      </div>
    </div>

    <div class="article-layout">
      <div class="article-body">
        ${a.sections.map(s => `<h2>${s.h}</h2><p>${s.p}</p>`).join('')}

        ${a.related && a.related.length ? `
          <div class="related">
            <div class="section-title">Ver também</div>
            <div class="related-list">${a.related.map(chipHtml).join('')}</div>
          </div>
        ` : ''}
      </div>

      <div class="infobox">
        <div class="infobox-header">
          <div class="icon lg" style="${iconStyle(a.icon)}"></div>
          <b>${a.title}</b>
        </div>
        <table>
          ${a.infobox.map(([k,v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('')}
        </table>
      </div>
    </div>
  `;
  renderCategoryNav(a.cat);
  window.scrollTo(0,0);
}

function renderSearch(query){
  const q = query.trim().toLowerCase();
  const results = Object.entries(WIKI_DATA.articles).filter(([id,a]) =>
    a.title.toLowerCase().includes(q) || a.tagline.toLowerCase().includes(q)
  );
  $main.innerHTML = `
    <div class="crumbs"><a onclick="navigate('home')" style="cursor:pointer">Início</a><span class="sep">/</span>Busca</div>
    <div class="section-title" style="margin-top:6px;">Resultados para "${escapeHtml(query)}"</div>
    <div class="result-count">${results.length} artigo(s) encontrado(s)</div>
    ${results.length ? `<div class="grid">${results.map(([id,a]) => cardHtml(id,a)).join('')}</div>` : `<div class="empty">Nenhum artigo encontrado. Tente outro termo.</div>`}
  `;
  renderCategoryNav(null);
}

// ---------- Router ----------
function navigate(view, param){
  let hash = '#home';
  if(view === 'cat') hash = `#cat/${param}`;
  if(view === 'article') hash = `#article/${param}`;
  if(view === 'search') hash = `#search/${encodeURIComponent(param)}`;
  if(location.hash === hash){ route(); } else { location.hash = hash; }
}

function goRandom(){
  const ids = Object.keys(WIKI_DATA.articles);
  const id = ids[Math.floor(Math.random() * ids.length)];
  navigate('article', id);
}

function route(){
  const hash = location.hash.slice(1) || 'home';
  const [view, ...rest] = hash.split('/');
  const param = decodeURIComponent(rest.join('/'));

  if(view === 'home' || !view) renderHome();
  else if(view === 'cat') renderCategory(param);
  else if(view === 'article') renderArticle(param);
  else if(view === 'search') renderSearch(param);
  else renderHome();

  if(view !== 'search') $search.value = '';
}

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', route);

// ---------- Search input ----------
let searchTimer;
$search.addEventListener('input', (e) => {
  clearTimeout(searchTimer);
  const val = e.target.value;
  searchTimer = setTimeout(() => {
    if(val.trim().length === 0){ if(location.hash.startsWith('#search')) navigate('home'); return; }
    navigate('search', val);
  }, 180);
});
$search.addEventListener('keydown', (e) => {
  if(e.key === 'Enter' && $search.value.trim()) navigate('search', $search.value);
});
