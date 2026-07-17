document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initCarousel();
  document.getElementById('year').textContent = new Date().getFullYear();
});

/**
 * Mobile navigation toggle.
 */
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-active', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
  });

  nav.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.classList.remove('is-active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/**
 * Events carousel: slide navigation, dots, autoplay and swipe support.
 */
function initCarousel() {
  const track = document.getElementById('carouselTrack');
  const slides = Array.from(track.children);
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsContainer = document.getElementById('carouselDots');
  const AUTOPLAY_DELAY = 5000;

  let currentIndex = 0;
  let autoplayTimer = null;

  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.classList.add('carousel__dot');
    dot.setAttribute('aria-label', `Ir para o evento ${index + 1}`);
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.children);

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle('is-active', index === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    updateCarousel();
    restartAutoplay();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  function startAutoplay() {
    autoplayTimer = setInterval(nextSlide, AUTOPLAY_DELAY);
  }

  function restartAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  const carousel = document.getElementById('carousel');
  carousel.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
  carousel.addEventListener('mouseleave', startAutoplay);

  let touchStartX = 0;

  track.addEventListener('touchstart', (event) => {
    touchStartX = event.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const delta = touchEndX - touchStartX;
    const SWIPE_THRESHOLD = 40;

    if (delta > SWIPE_THRESHOLD) {
      prevSlide();
    } else if (delta < -SWIPE_THRESHOLD) {
      nextSlide();
    }
  }, { passive: true });

  updateCarousel();
  startAutoplay();
}
