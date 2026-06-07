const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.nav__hamburger');
const navLinks = document.querySelectorAll('.nav__links a');
const sections = document.querySelectorAll('section[id]');

hamburger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('nav--open');
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

function closeAllDropdowns() {
  document.querySelectorAll('.nav__dropdown.open').forEach(d => {
    d.classList.remove('open');
    d.querySelector('.nav__dropdown-toggle').setAttribute('aria-expanded', 'false');
  });
}

document.querySelectorAll('.nav__dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const dropdown = toggle.closest('.nav__dropdown');
    const isOpen = dropdown.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
});

document.addEventListener('click', (e) => {
  if (!nav.contains(e.target)) {
    nav.classList.remove('nav--open');
    hamburger.setAttribute('aria-expanded', 'false');
    closeAllDropdowns();
  } else if (!e.target.closest('.nav__dropdown')) {
    closeAllDropdowns();
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

if (backToTop) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = Math.min(scrolled / total, 1);
    if (progressRing) progressRing.style.strokeDashoffset = circumference - progress * circumference;
    backToTop.classList.toggle('is-visible', scrolled > 200);
  }, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Role switcher — injected once here, never duplicated in HTML
const roles = ['visitor', 'employer'];
const roleLabels = { visitor: 'Visitor', employer: 'Ops' };
let currentRole = document.documentElement.dataset.role || 'visitor';

const topBarInner = document.querySelector('.top-bar__inner');
if (topBarInner) {
  const switcher = document.createElement('div');
  switcher.className = 'role-switcher';
  switcher.setAttribute('aria-label', 'Demo role switcher');
  switcher.innerHTML = `<span class="role-switcher__label">Viewing as: <strong id="role-label">${roleLabels[currentRole]}</strong></span><button class="role-switcher__btn" id="role-btn">Switch Role</button>`;
  topBarInner.prepend(switcher);

  document.getElementById('role-btn').addEventListener('click', () => {
    currentRole = roles[(roles.indexOf(currentRole) + 1) % roles.length];
    document.documentElement.dataset.role = currentRole;
    document.getElementById('role-label').textContent = roleLabels[currentRole];
    sessionStorage.setItem('demoRole', currentRole);
  });
}
