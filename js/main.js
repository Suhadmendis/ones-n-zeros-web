// Sticky nav shadow
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu toggle
const toggle = document.getElementById('navToggle');
const navInner = toggle.closest('.nav-inner');
toggle.addEventListener('click', () => {
  navInner.classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navInner.classList.remove('open'));
});

// Contact form — client-side validation feedback
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    note.textContent = 'Please fill in all required fields.';
    note.className = 'form-note error';
    return;
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    note.textContent = 'Please enter a valid email address.';
    note.className = 'form-note error';
    return;
  }

  note.textContent = "Thanks — we'll be in touch within one business day.";
  note.className = 'form-note success';
  form.reset();
});

// Fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.service-card, .process-step, .pillar, .why-item, .about-card'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Inject fade-in keyframe styles
const style = document.createElement('style');
style.textContent = `
  .fade-in { opacity: 0; transform: translateY(18px); transition: opacity .5s ease, transform .5s ease; }
  .fade-in.visible { opacity: 1; transform: none; }
`;
document.head.appendChild(style);
