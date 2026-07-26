/* ============================================================
   Shape My Home — Main JavaScript
   GSAP + ScrollTrigger animations, hamburger menu, smooth scroll
   
   Dependencies (loaded via CDN in HTML):
   - gsap.min.js
   - ScrollTrigger.min.js
   ============================================================ */

// Wait for DOM ready
document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Register GSAP plugin
  gsap.registerPlugin(ScrollTrigger);

  /* --------------------------------------------------------
     SCROLL PROGRESS BAR
     -------------------------------------------------------- */
  const progressBar = document.querySelector('.scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      progressBar.style.width = progress + '%';
    });
  }

  /* --------------------------------------------------------
     NAVBAR — shrink & blur on scroll
     -------------------------------------------------------- */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    ScrollTrigger.create({
      start: 'top -80',
      onUpdate: (self) => {
        if (self.direction === 1 && window.scrollY > 80) {
          navbar.classList.add('scrolled');
        }
        if (window.scrollY <= 80) {
          navbar.classList.remove('scrolled');
        }
      },
    });

    // Also check on scroll for reliability
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  /* --------------------------------------------------------
     HAMBURGER MENU
     -------------------------------------------------------- */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-menu__link');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open')
        ? 'hidden'
        : '';
    });

    // Close on link click
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* --------------------------------------------------------
     SMOOTH SCROLL for anchor links
     -------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80; // account for fixed nav
        const top =
          target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* --------------------------------------------------------
     HERO — word-by-word reveal on load
     -------------------------------------------------------- */
  const heroHeading = document.querySelector('.hero__heading');
  if (heroHeading) {
    // Wrap each word in a span for animation
    const text = heroHeading.textContent.trim();
    const words = text.split(/\s+/);
    heroHeading.innerHTML = words
      .map(
        (word) =>
          `<span class="word"><span class="word-inner">${word}</span></span>`
      )
      .join(' ');

    // Animate
    gsap.from('.hero__heading .word-inner', {
      y: '110%',
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.08,
      delay: 0.3,
    });

    // Animate subheading and CTA
    gsap.from('.hero__sub', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      delay: 1,
    });

    gsap.from('.hero__cta', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      delay: 1.2,
    });
  }

  /* --------------------------------------------------------
     SECTION REVEAL — reusable scroll-triggered animation
     Applied to every element with class .reveal
     -------------------------------------------------------- */
  const revealSections = document.querySelectorAll('.reveal');
  revealSections.forEach((section) => {
    // Make visible for GSAP
    gsap.set(section, { visibility: 'visible' });

    // Find children to stagger
    const children = section.querySelectorAll('.reveal-child');
    if (children.length > 0) {
      gsap.from(children, {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    } else {
      gsap.from(section, {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }
  });

  /* --------------------------------------------------------
     IMAGE REVEAL — clip-path curtain wipe
     -------------------------------------------------------- */
  const imgReveals = document.querySelectorAll('.img-reveal');
  imgReveals.forEach((img) => {
    gsap.to(img, {
      clipPath: 'inset(0 0% 0 0)',
      duration: 1.2,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: img,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });

  /* --------------------------------------------------------
     HORIZONTAL SCROLL — Services section (desktop only)
     On mobile: native horizontal scroll with scroll-snap
     -------------------------------------------------------- */
  const servicesSection = document.querySelector('.services');
  const trackWrapper = document.querySelector('.services__track-wrapper');
  const track = document.querySelector('.services__track');

  if (servicesSection && trackWrapper && track) {
    // Use matchMedia to only pin on desktop/tablet
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      // Calculate how far to scroll
      const getScrollAmount = () => {
        return -(track.scrollWidth - trackWrapper.offsetWidth);
      };

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: servicesSection,
          start: 'top top',
          end: () => `+=${track.scrollWidth - trackWrapper.offsetWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Disable native scroll on desktop
      trackWrapper.style.overflowX = 'hidden';

      return () => {
        // Cleanup: re-enable native scroll
        trackWrapper.style.overflowX = 'auto';
      };
    });

    // Mobile: do nothing extra, native scroll-snap handles it
  }

  /* --------------------------------------------------------
     GALLERY ITEMS — stagger fade in
     -------------------------------------------------------- */
  const galleryItems = document.querySelectorAll('.gallery__item');
  if (galleryItems.length > 0) {
    gsap.from(galleryItems, {
      y: 40,
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.gallery__grid',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }

  /* --------------------------------------------------------
     PROCESS STEPS — stagger from left
     -------------------------------------------------------- */
  const processSteps = document.querySelectorAll('.process__step');
  if (processSteps.length > 0) {
    gsap.from(processSteps, {
      x: -30,
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.process__steps',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }

  /* --------------------------------------------------------
     TESTIMONIALS — fade in
     -------------------------------------------------------- */
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  if (testimonialCards.length > 0) {
    gsap.from(testimonialCards, {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: '.testimonials__grid',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }

  /* --------------------------------------------------------
     CONTACT FORM — basic front-end handler
     (No backend yet — just shows a confirmation message)
     -------------------------------------------------------- */
  const contactForm = document.querySelector('.contact__form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('.btn');
      const originalText = btn.textContent;
      btn.textContent = 'Thank you! We\'ll be in touch.';
      btn.style.pointerEvents = 'none';
      btn.style.opacity = '0.7';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.pointerEvents = '';
        btn.style.opacity = '';
        contactForm.reset();
      }, 3000);
    });
  }
});
