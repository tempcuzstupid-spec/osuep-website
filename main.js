/* =========================================================
   One Stop Uniforms Enterprise Platform — Foundation Site
   Lightweight enhancements: nav toggle, smooth scroll,
   reveal-on-scroll, dynamic year.
   ========================================================= */

(function () {
  'use strict';

  // ----- Mobile nav toggle -----
  const toggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('navMobile');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    mobileNav.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  // ----- Header shadow on scroll -----
  const header = document.getElementById('site-header');
  let ticking = false;
  const onScroll = () => {
    if (!header) return;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        header.classList.toggle('is-scrolled', window.scrollY > 8);
        ticking = false;
      });
      ticking = true;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ----- Reveal-on-scroll -----
  const revealSelectors = [
    '.section__eyebrow',
    '.section__title',
    '.section__lede',
    '.card',
    '.value',
    '.rule',
    '.timeline__item',
    '.chip',
    '.charter-grid li',
    '.pull-quote',
    '.seal',
    '.hero__title',
    '.hero__lede',
    '.hero__meta',
    '.hero__cta',
  ];
  const revealItems = document.querySelectorAll(revealSelectors.join(','));
  revealItems.forEach((el, idx) => {
    el.classList.add('reveal');
    el.style.transitionDelay = Math.min(idx * 18, 240) + 'ms';
  });

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    revealItems.forEach((el) => io.observe(el));
  } else {
    revealItems.forEach((el) => el.classList.add('is-visible'));
  }

  // ----- Footer year -----
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // ----- Smooth-scroll polyfill for older browsers (CSS already handles modern) -----
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (!id || id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const headerHeight = header ? header.offsetHeight : 0;
      const y = target.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
      window.scrollTo({ top: y, behavior: 'smooth' });
      // Update URL hash without jumping
      history.replaceState(null, '', id);
    });
  });

  // ----- Subtle parallax on hero grid background -----
  const heroBg = document.querySelector('.hero__bg');
  if (heroBg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener(
      'scroll',
      () => {
        const y = Math.min(window.scrollY, 600);
        heroBg.style.transform = `translateY(${y * 0.08}px)`;
      },
      { passive: true }
    );
  }
})();