// ── NAVBAR SCROLL EFFECT ──
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ── HAMBURGER MENU ──
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    if (mobileMenu) {
      mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
    }
  });
}

// ── ACTIVE NAV LINK ──
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
navLinks.forEach(link => {
  const href = link.getAttribute('href');
  if (
    (currentPage === '' || currentPage === 'index.html') && (href === 'index.html' || href === './') ||
    href === currentPage
  ) {
    link.classList.add('active');
  }
});

// ── INTERSECTION OBSERVER (scroll animations) ──
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
