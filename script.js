// ===== NAVBAR =====
const navbar = document.getElementById('navbar');
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

if (navbar) {
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 50));
}
if (mobileToggle && navLinks) {
  mobileToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
  });
}

// ===== SCROLL REVEAL =====
const revealOnScroll = () => {
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) el.classList.add('active');
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== FAQ TOGGLE =====
function toggleFaq(el) {
  const item = el.closest('.faq-item');
  const answer = item.querySelector('.faq-answer');
  const isOpen = item.classList.contains('faq-open');
  
  // Close all
  document.querySelectorAll('.faq-item').forEach(fi => {
    fi.classList.remove('faq-open');
    fi.querySelector('.faq-answer').style.maxHeight = '0';
  });
  
  // Open clicked if wasn't open
  if (!isOpen) {
    item.classList.add('faq-open');
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
