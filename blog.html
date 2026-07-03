
'use strict';

(function cursor(){
  const dot = document.getElementById('cdot');
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
  if(!dot || !fine.matches) return;
  window.addEventListener('mousemove', e => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
  }, {passive:true});
  const selector = 'a,button,input,textarea,select,label,.article-card,.cover-card,.product-card,.shop-category';
  document.addEventListener('pointerover', e => {
    if(e.target.closest(selector)) document.body.classList.add('cursor-active');
  });
  document.addEventListener('pointerout', e => {
    if(e.target.closest(selector)) document.body.classList.remove('cursor-active');
  });
})();

(function nav(){
  const burger = document.querySelector('.nav-burger');
  const menu = document.getElementById('primary-navigation');
  if(!burger || !menu) return;
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  menu.addEventListener('click', e => {
    if(e.target.closest('a')){
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded','false');
      burger.setAttribute('aria-label','Open menu');
    }
  });
})();

(function reveal(){
  const items = document.querySelectorAll('.reveal');
  if(!items.length) return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)){
    items.forEach(item => item.classList.add('in'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.12, rootMargin:'0px 0px -30px 0px'});
  items.forEach(item => observer.observe(item));
})();

(function blogSearch(){
  const grid = document.querySelector('[data-blog-grid]');
  if(!grid) return;
  const search = document.querySelector('[data-blog-search]');
  const sort = document.querySelector('[data-blog-sort]');
  const chips = document.querySelectorAll('[data-filter]');
  const empty = document.querySelector('[data-empty-state]');
  let filter = 'all';

  function apply(){
    const q = (search?.value || '').trim().toLowerCase();
    let visible = 0;
    const cards = Array.from(grid.querySelectorAll('.article-card'));
    if(sort?.value === 'az'){
      cards.sort((a,b) => (a.dataset.title || '').localeCompare(b.dataset.title || '')).forEach(card => grid.appendChild(card));
    }
    cards.forEach(card => {
      const hay = `${card.dataset.title || ''} ${card.dataset.category || ''}`;
      const matchesSearch = !q || hay.includes(q);
      const matchesFilter = filter === 'all' || (card.dataset.category || '').includes(filter);
      const show = matchesSearch && matchesFilter;
      card.style.display = show ? '' : 'none';
      if(show) visible++;
    });
    if(empty) empty.style.display = visible ? 'none' : 'block';
  }

  search?.addEventListener('input', apply);
  sort?.addEventListener('change', apply);
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      filter = chip.dataset.filter || 'all';
      apply();
    });
  });
})();
