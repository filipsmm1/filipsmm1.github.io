/* ============================================
   STYLISHANDHEALTHY — SHARED SCRIPTS
   ============================================ */

// Cursor
(function() {
  const cdot = document.getElementById('cdot');
  const cring = document.getElementById('cring');
  if (!cdot || !cring) return;
  let mx=0, my=0, rx=0, ry=0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cdot.style.left = mx + 'px';
    cdot.style.top  = my + 'px';
  });
  (function lr() {
    rx += (mx - rx) * .11;
    ry += (my - ry) * .11;
    cring.style.left = rx + 'px';
    cring.style.top  = ry + 'px';
    requestAnimationFrame(lr);
  })();
  document.querySelectorAll('a, button, .sc, .cat, .bc, .tc, .subc, .ap, .skc, .feat-pill, .inside-card, .spread').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('ch'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('ch'));
  });
})();

// Reveal on scroll
(function() {
  const ro = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); }
  }), { threshold: .1 });
  document.querySelectorAll('.rv').forEach(el => ro.observe(el));
})();

// Newsletter form handler (shared)
function handleNwSub(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  const orig = btn.textContent;
  btn.textContent = "You're in!";
  btn.style.background = 'var(--green-lt)';
  setTimeout(() => { btn.textContent = orig; btn.style.background = ''; e.target.reset(); }, 3000);
}

// Active nav link
(function() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav ul li a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();
