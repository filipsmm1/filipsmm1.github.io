const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => {
  if (!glow) return;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const ritualText = {
  gratitude: 'Write three things that make your life feel rich before the day starts.',
  priorities: 'Choose only three priorities, so your day feels focused instead of frantic.',
  reflection: 'End the day by noticing what worked, what drained you, and what you need next.'
};

document.querySelectorAll('.ritual-steps button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.ritual-steps button').forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    document.getElementById('ritualResult').textContent = ritualText[button.dataset.step];
  });
});

const affirmations = [
  'I am allowed to become a more disciplined, beautiful version of myself.',
  'My routines are not pressure; they are proof that I care for myself.',
  'I can build a life that feels calm, pretty, intentional and mine.',
  'Small promises kept daily become my new identity.',
  'I do not chase my glow. I create the conditions for it.'
];

const affirmation = document.getElementById('affirmation');
const newAffirmation = document.getElementById('newAffirmation');
let affirmationIndex = 0;
newAffirmation?.addEventListener('click', () => {
  affirmationIndex = (affirmationIndex + 1) % affirmations.length;
  affirmation.animate([{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 320, easing: 'ease-out' });
  affirmation.textContent = affirmations[affirmationIndex];
});
