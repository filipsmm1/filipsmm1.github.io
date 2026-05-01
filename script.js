const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const cursorOrb = $('.cursor-orb');
window.addEventListener('pointermove', (event) => {
  cursorOrb.style.left = `${event.clientX}px`;
  cursorOrb.style.top = `${event.clientY}px`;
});

$('#menuButton').addEventListener('click', () => $('#navLinks').classList.toggle('open'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.14 });
$$('.section-reveal').forEach((section) => observer.observe(section));

const counter = $('[data-count]');
let counted = false;
const counterObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !counted) {
    counted = true;
    let current = 0;
    const target = Number(counter.dataset.count);
    const timer = setInterval(() => {
      current += 250;
      counter.textContent = current >= target ? '10k+' : current.toLocaleString();
      if (current >= target) clearInterval(timer);
    }, 18);
  }
});
counterObserver.observe(counter);

const routines = {
  glow: {
    icon: '☼',
    title: 'Matcha Glow Ritual',
    description: 'A bright, hydrated routine focused on gentle consistency and glow-supporting layers.',
    steps: [
      ['Milky cleanse', 'start soft, never stripped'],
      ['Hydrating essence', 'layer calm moisture'],
      ['Barrier cream', 'seal the ritual'],
      ['SPF glow veil', 'protect the future you'],
    ],
  },
  calm: {
    icon: '☁',
    title: 'Calm Girl Barrier Ritual',
    description: 'A soothing routine for skin that wants less chaos, more nourishment, and fewer unnecessary steps.',
    steps: [
      ['Cream cleanse', 'comfort first'],
      ['Cica mist', 'calm the skin mood'],
      ['Ceramide cream', 'repair and soften'],
      ['Mineral SPF', 'gentle daily protection'],
    ],
  },
  clear: {
    icon: '✧',
    title: 'Clear Standards Ritual',
    description: 'A simple, targeted routine for staying consistent without overwhelming your skin barrier.',
    steps: [
      ['Gel cleanse', 'fresh but not tight'],
      ['Niacinamide serum', 'balance the look'],
      ['Light moisturizer', 'hydrate without heaviness'],
      ['Non-greasy SPF', 'finish clean'],
    ],
  },
  soft: {
    icon: '♡',
    title: 'Soft Skin Ritual',
    description: 'A plush, feminine routine for skin that wants softness, comfort, and a romantic little glow.',
    steps: [
      ['Oil-to-milk cleanse', 'melt the day away'],
      ['Rosewater essence', 'soft hydration'],
      ['Peptide cream', 'bouncy finish'],
      ['Dewy SPF', 'glow gently'],
    ],
  },
};

$$('.tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    $$('.tab').forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
    const routine = routines[tab.dataset.skin];
    $('#routineCard').style.transform = 'scale(.985)';
    setTimeout(() => $('#routineCard').style.transform = 'scale(1)', 160);
    $('.routine-icon').textContent = routine.icon;
    $('#routineTitle').textContent = routine.title;
    $('#routineDescription').textContent = routine.description;
    $('#routineSteps').innerHTML = routine.steps.map((step, index) => `
      <li><span>${index + 1}</span><b>${step[0]}</b><em>${step[1]}</em></li>
    `).join('');
  });
});

$$('.ritual-card').forEach((card) => {
  card.addEventListener('click', () => {
    $$('.ritual-card').forEach((item) => item.classList.remove('active'));
    card.classList.add('active');
    $('#affirmationBox').textContent = card.dataset.affirmation;
    $('#affirmationBox').animate([
      { transform: 'scale(.98)', opacity: .6 },
      { transform: 'scale(1)', opacity: 1 }
    ], { duration: 260, easing: 'ease-out' });
  });
});

const eraRange = $('#eraRange');
eraRange.addEventListener('input', () => {
  const value = Number(eraRange.value);
  const label = value < 34 ? 'Soft Reset Era' : value < 70 ? 'Matcha Main Character' : 'Unbothered Glow CEO';
  $('#eraOutput span').textContent = `${value}%`;
  $('#eraOutput b').textContent = label;
  document.documentElement.style.setProperty('--matcha', `hsl(${82 + value / 8}, ${24 + value / 8}%, ${48 + value / 10}%)`);
});

const productData = {
  becoming: {
    type: 'Signature digital journal',
    title: 'The Becoming Journal',
    text: 'A feminine identity journal for discipline, confidence, standards, and romanticizing your growth.',
    bullets: ['30 becoming-her prompts', 'weekly glow-up planner', 'habit and mood tracking', 'self-worth reset pages'],
  },
  reset: {
    type: 'Guided planner',
    title: 'Soft Life Reset',
    text: 'A calming reset for routines, boundaries, goals, and emotional clarity.',
    bullets: ['life audit pages', 'routine rebuild prompts', 'monthly intention board', 'soft productivity system'],
  },
  beauty: {
    type: 'Beauty tracker',
    title: 'Beauty Rituals Diary',
    text: 'A pretty, practical place to track skincare, haircare, fragrance, bodycare, and glow notes.',
    bullets: ['AM/PM routine tracker', 'skin mood log', 'product review pages', 'weekly beauty reflections'],
  },
};

const modal = $('#productModal');
$$('[data-open-modal]').forEach((button) => {
  button.addEventListener('click', () => {
    const data = productData[button.dataset.openModal];
    $('#modalType').textContent = data.type;
    $('#modalTitle').textContent = data.title;
    $('#modalText').textContent = data.text;
    $('#modalList').innerHTML = data.bullets.map((item) => `<li>${item}</li>`).join('');
    modal.showModal();
  });
});
$('#modalClose').addEventListener('click', () => modal.close());

$$('.tilt-card').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - .5) * -5;
    const rotateY = ((x / rect.width) - .5) * 5;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });
  card.addEventListener('pointerleave', () => {
    card.style.transform = '';
  });
});

$('#subscribeForm').addEventListener('submit', (event) => {
  event.preventDefault();
  $('#formMessage').textContent = 'You are on the glow list ✦';
  event.target.reset();
});
