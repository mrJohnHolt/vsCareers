const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.nav__hamburger');
const navLinks = document.querySelectorAll('.nav__links a');
const sections = document.querySelectorAll('section[id]');

hamburger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('nav--open');
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

document.addEventListener('click', (e) => {
  if (!nav.contains(e.target)) {
    nav.classList.remove('nav--open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav--open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    const href = id === 'home' ? '/' : `/${id}`;
    const match = document.querySelector(`.nav__links a[href="${href}"]`);
    if (match) {
      navLinks.forEach(l => l.classList.remove('active'));
      match.classList.add('active');
    }
  });
}, { rootMargin: '-30% 0px -60% 0px' });

sections.forEach(s => observer.observe(s));

window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 10);
}, { passive: true });

const backToTop = document.getElementById('back-to-top');
const progressRing = document.getElementById('scroll-progress');
const circumference = 2 * Math.PI * 24;

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = Math.min(scrolled / total, 1);
  progressRing.style.strokeDashoffset = circumference - progress * circumference;
  backToTop.classList.toggle('is-visible', scrolled > 200);
}, { passive: true });

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Demo role switcher
const roles = ['visitor', 'employer'];
const roleLabels = { visitor: 'Visitor', employer: 'Ops' };
const roleBtn = document.getElementById('role-btn');
const roleLabelEl = document.getElementById('role-label');

let currentRole = sessionStorage.getItem('demoRole') || 'visitor';
document.body.dataset.role = currentRole;
if (roleLabelEl) roleLabelEl.textContent = roleLabels[currentRole];

roleBtn?.addEventListener('click', () => {
  currentRole = roles[(roles.indexOf(currentRole) + 1) % roles.length];
  document.body.dataset.role = currentRole;
  roleLabelEl.textContent = roleLabels[currentRole];
  sessionStorage.setItem('demoRole', currentRole);
});
