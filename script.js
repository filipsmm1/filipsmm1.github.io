const buttons = document.querySelectorAll('[data-goal]');
const title = document.getElementById('routine-title');
const copy = document.getElementById('routine-copy');

const routines = {
  glow: {
    title: 'Your glow ritual',
    copy: 'A dewy, balanced ritual built around hydration, barrier support, and consistency.'
  },
  clear: {
    title: 'Your clear ritual',
    copy: 'A calm, targeted ritual designed to simplify your routine and support clearer-looking skin.'
  },
  soft: {
    title: 'Your soft ritual',
    copy: 'A gentle routine for soft, nourished skin with a feminine, low-maintenance feel.'
  }
};

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    const goal = button.dataset.goal;
    title.textContent = routines[goal].title;
    copy.textContent = routines[goal].copy;
  });
});

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach((el) => observer.observe(el));
