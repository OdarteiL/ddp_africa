// ── NAV scroll behaviour
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── Mobile nav
const burger = document.querySelector('.nav__burger');
const navLinks = document.querySelector('.nav__links');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ── Hero slideshow
const slides = document.querySelectorAll('.hero__slide');
const dots = document.querySelectorAll('.dot');
let current = 0, timer;

function goToSlide(n) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = (n + slides.length) % slides.length;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

function startSlideshow() {
  timer = setInterval(() => goToSlide(current + 1), 5000);
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(timer);
    goToSlide(+dot.dataset.slide);
    startSlideshow();
  });
});

startSlideshow();

// ── Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal-up, .reveal-right').forEach(el => revealObserver.observe(el));

// ── Animated counters
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = +el.dataset.target;
    const duration = 1800;
    const start = performance.now();
    const isYear = target > 1000;

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = isYear
        ? Math.floor(ease * target)
        : Math.floor(ease * target);
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat__num').forEach(el => counterObserver.observe(el));

// ── Parallax on scroll
const parallaxEls = document.querySelectorAll('.parallax-img');
function updateParallax() {
  parallaxEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * 0.15;
    el.style.backgroundPositionY = `calc(50% + ${offset}px)`;
  });
}
// Only apply JS parallax on non-mobile (CSS fixed attachment handles desktop)
if (window.innerWidth <= 768) {
  window.addEventListener('scroll', updateParallax, { passive: true });
}

// ── Horizontal scroll drag for sectors
const scroller = document.querySelector('.sectors-scroll');
if (scroller) {
  let isDown = false, startX, scrollLeft;
  scroller.addEventListener('mousedown', e => {
    isDown = true;
    startX = e.pageX - scroller.offsetLeft;
    scrollLeft = scroller.scrollLeft;
    scroller.style.cursor = 'grabbing';
  });
  scroller.addEventListener('mouseleave', () => { isDown = false; scroller.style.cursor = ''; });
  scroller.addEventListener('mouseup', () => { isDown = false; scroller.style.cursor = ''; });
  scroller.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scroller.offsetLeft;
    scroller.scrollLeft = scrollLeft - (x - startX) * 1.5;
  });
}

// ── Contact form
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Message Sent — We\'ll be in touch within 1 business day';
  btn.disabled = true;
  btn.style.background = '#2d7a4f';
  btn.style.color = '#fff';
  btn.style.borderColor = '#2d7a4f';
}
