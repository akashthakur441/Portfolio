/* =========================================================
   1. HERO CONSOLE — types out a query, then reveals a result
   ========================================================= */
const QUERY_TEXT = `df.query("role == 'Data Scientist'")`;

function typeText(el, text, speed = 45){
  return new Promise(resolve => {
    let i = 0;
    const timer = setInterval(() => {
      el.textContent = text.slice(0, i);
      i++;
      if (i > text.length){
        clearInterval(timer);
        resolve();
      }
    }, speed);
  });
}

async function runConsole(){
  const typedEl = document.getElementById('typed-query');
  const resultEl = document.getElementById('query-result');
  if (!typedEl || !resultEl) return;

  await typeText(typedEl, QUERY_TEXT);

  // Edit the rows below to change what the "query result" shows
  resultEl.innerHTML = `
    <table>
      <tr><td class="key">name</td><td>Akash Thakur</td></tr>
      <tr><td class="key">role</td><td>Data Scientist</td></tr>
      <tr><td class="key">stack</td><td>Python · SQL · ML · Power BI</td></tr>
      <tr><td class="key">status</td><td>open to opportunities</td></tr>
    </table>
  `;
  requestAnimationFrame(() => resultEl.classList.add('is-visible'));
}
runConsole();

/* =========================================================
   2. PROJECT CARDS — rendered from js/projects.js
   ========================================================= */
function renderProjects(){
  const grid = document.getElementById('project-grid');
  if (!grid || typeof PROJECTS === 'undefined') return;

  grid.innerHTML = PROJECTS.map((p, i) => `
    <article class="project-card">
      <a href="${p.link}" target="_blank" rel="noopener" class="project-card__imgwrap">
        <img src="${p.image}" alt="${p.title}" class="project-card__img" onerror="this.parentElement.style.display='none'">
      </a>
      <div class="project-card__body">
        <p class="project-card__index">${String(i + 1).padStart(2, '0')}</p>
        <h3 class="project-card__title">${p.title}</h3>
        <p class="project-card__desc">${p.desc}</p>
        <a class="project-card__link" href="${p.link}" target="_blank" rel="noopener">View on GitHub →</a>
      </div>
    </article>
  `).join('');
}
renderProjects();

/* =========================================================
   3. FOOTER YEAR
   ========================================================= */
document.getElementById('year').textContent = new Date().getFullYear();
