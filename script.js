const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach(el => observer.observe(el));

const moods = {
  soft: {
    title: 'Soft reset',
    prompt: 'What would feel peaceful, beautiful, and manageable today?',
    tag: 'journal · skincare · slow morning'
  },
  glow: {
    title: 'Glow-up',
    prompt: 'What is one tiny promise you can keep to your future self today?',
    tag: 'habits · confidence · beauty ritual'
  },
  focus: {
    title: 'Focused girl',
    prompt: 'What are the three priorities that would make today feel successful?',
    tag: 'schedule · discipline · calm productivity'
  }
};

document.querySelectorAll('[data-mood]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-mood]').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const mood = moods[button.dataset.mood];
    document.getElementById('moodTitle').textContent = mood.title;
    document.getElementById('moodPrompt').textContent = mood.prompt;
    document.getElementById('moodTag').textContent = mood.tag;
  });
});
