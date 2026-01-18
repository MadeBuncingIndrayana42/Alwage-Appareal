/*=============== GLOBAL VARIABLES ===============*/
// WhatsApp number - GANTI dengan nomor WhatsApp Anda (format: 628xxx)
const WHATSAPP_NUMBER = '6282178426832';
const WHATSAPP_MESSAGE = 'Halo Alwage Appareal, saya tertarik dengan custom jersey. Bisa bantu saya?';

/*=============== HERO SLIDESHOW ===============*/
let currentSlide = 0;
let slideInterval;
const slides = document.querySelectorAll('.hero__slide');
const dots = document.querySelectorAll('.hero__dot');
const heroSection = document.querySelector('.hero');

function showSlide(index) {
  // Remove active class from all slides and dots
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  // Add active class to current slide and dot
  slides[index].classList.add('active');
  dots[index].classList.add('active');

  currentSlide = index;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function startSlideshow() {
  slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function stopSlideshow() {
  clearInterval(slideInterval);
}

// Initialize slideshow
if (slides.length > 0) {
  startSlideshow();

  // Manual navigation with dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      stopSlideshow();
      showSlide(index);
      startSlideshow(); // Restart auto-rotation after manual click
    });
  });

  // Pause slideshow on hover
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopSlideshow);
    heroSection.addEventListener('mouseleave', startSlideshow);
  }
}

/*=============== SHOW/HIDE MENU (MOBILE) ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Show menu
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// Hide menu
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU ON MOBILE LINK CLICK ===============*/
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}

navLinks.forEach(link => link.addEventListener('click', linkAction));

/*=============== CHANGE HEADER BACKGROUND ON SCROLL ===============*/
function scrollHeader() {
  const header = document.getElementById('header');

  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);

/*=============== ACTIVE LINK ON SCROLL ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute('id');
    const navLink = document.querySelector('.nav__link[href*=' + sectionId + ']');

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add('active-link');
      } else {
        navLink.classList.remove('active-link');
      }
    }
  });
}

window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL TO TOP BUTTON ===============*/
function scrollTop() {
  const scrollTop = document.getElementById('scroll-top');

  if (this.scrollY >= 560) {
    scrollTop.classList.add('show-scroll');
  } else {
    scrollTop.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollTop);

/*=============== SCROLL TO TOP FUNCTIONALITY ===============*/
const scrollTopBtn = document.getElementById('scroll-top');

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/*=============== WHATSAPP CTA FUNCTIONALITY ===============*/
function generateWhatsAppLink(message = WHATSAPP_MESSAGE) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

// Hero CTA
const heroCTA = document.getElementById('hero-cta');
if (heroCTA) {
  heroCTA.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(generateWhatsAppLink(), '_blank');
  });
}

// Footer CTA
const footerCTA = document.getElementById('footer-cta');
if (footerCTA) {
  footerCTA.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(generateWhatsAppLink(), '_blank');
  });
}

// Floating WhatsApp Button
const whatsappFloat = document.getElementById('whatsapp-float');
if (whatsappFloat) {
  whatsappFloat.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(generateWhatsAppLink(), '_blank');
  });
}

/*=============== GALLERY LIGHTBOX ===============*/
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');
const galleryBtns = document.querySelectorAll('.gallery__btn');

// Open lightbox
galleryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const imgSrc = btn.getAttribute('data-img');
    lightboxImg.src = imgSrc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent body scroll
  });
});

// Close lightbox
if (lightboxClose) {
  lightboxClose.addEventListener('click', () => {
    closeLightbox();
  });
}

// Close lightbox on background click
if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
}

// Close lightbox on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('active')) {
    closeLightbox();
  }
});

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = ''; // Restore body scroll
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const revealElements = document.querySelectorAll('.product__card, .feature__card, .process__step, .gallery__item, .testimonial__card');

function reveal() {
  revealElements.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('reveal', 'active');
    }
  });
}

window.addEventListener('scroll', reveal);

// Initial reveal on page load
window.addEventListener('load', reveal);

/*=============== SMOOTH SCROLL FOR ALL ANCHOR LINKS ===============*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Skip if it's just "#" or WhatsApp buttons
    if (href === '#' || this.id === 'hero-cta' || this.id === 'footer-cta' || this.id === 'whatsapp-float') {
      return;
    }

    e.preventDefault();

    const target = document.querySelector(href);
    if (target) {
      const headerHeight = document.getElementById('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

/*=============== LAZY LOADING IMAGES ===============*/
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;

        // If image has data-src, load it
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }

        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px'
  });

  // Observe all images with data-src attribute
  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach(img => imageObserver.observe(img));
}

/*=============== PRODUCT CARDS INTERACTION ===============*/
const productLinks = document.querySelectorAll('.product__link');

productLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const productName = link.closest('.product__card').querySelector('.product__title').textContent;
    const customMessage = `Halo Alwage Appareal, saya tertarik dengan produk ${productName}. Bisa bantu saya?`;
    window.open(generateWhatsAppLink(customMessage), '_blank');
  });
});

/*=============== FORM VALIDATION (if you add contact form later) ===============*/
// Placeholder for future contact form functionality

/*=============== PERFORMANCE: Debounce scroll events ===============*/
function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Apply debounce to scroll events for better performance
window.addEventListener('scroll', debounce(scrollActive));
window.addEventListener('scroll', debounce(scrollTop));
window.addEventListener('scroll', debounce(reveal));

/*=============== CONSOLE MESSAGE ===============*/
console.log('%c🎨 Alwage Appareal Landing Page', 'color: #1E40AF; font-size: 20px; font-weight: bold;');
console.log('%c✨ Built with HTML, CSS & Vanilla JavaScript', 'color: #3B82F6; font-size: 14px;');
console.log('%cNeed help? Contact us via WhatsApp!', 'color: #25D366; font-size: 12px;');

/*=============== ANALYTICS EVENTS (Optional - for future integration) ===============*/
// Track CTA clicks
function trackCTAClick(ctaName) {
  console.log(`CTA Clicked: ${ctaName}`);

  // Future: Google Analytics or Facebook Pixel integration
  // Example: gtag('event', 'cta_click', { 'cta_name': ctaName });
}

// Add tracking to CTA buttons
if (heroCTA) {
  heroCTA.addEventListener('click', () => trackCTAClick('Hero CTA'));
}

if (footerCTA) {
  footerCTA.addEventListener('click', () => trackCTAClick('Footer CTA'));
}

if (whatsappFloat) {
  whatsappFloat.addEventListener('click', () => trackCTAClick('Floating WhatsApp'));
}

/*=============== PREVENT CONSOLE ERRORS FOR MISSING ELEMENTS ===============*/
// All element checks are already done with if statements above
// This ensures the script runs smoothly even if some elements are missing

/*=============== PAGE LOADED ===============*/
window.addEventListener('load', () => {
  console.log('✅ Page fully loaded and ready!');

  // Optional: Add loading animation fade out
  const loader = document.querySelector('.page-loader');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 300);
  }
});
