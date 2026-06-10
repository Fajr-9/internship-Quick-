'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initLoader();
  initBackToTop();
  initStickyNavbar();
  initActiveNavLink();
  initScrollAnimations();
  initMobileNav();
});

function initThemeToggle() {
  const toggles = document.querySelectorAll('#theme-toggle');
  if (!toggles.length) return;

  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.setAttribute('data-theme', savedTheme);
  updateThemeIcons(savedTheme);

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const current = document.body.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeIcons(next);
    });
  });
}

function updateThemeIcons(theme) {
  const icons = document.querySelectorAll('.theme-icon');
  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  const icon = theme === 'dark' ? '☀️' : '🌙';

  icons.forEach((el) => {
    el.textContent = icon;
  });

  document.querySelectorAll('#theme-toggle').forEach((btn) => {
    btn.setAttribute('aria-label', label);
  });
}

function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  setTimeout(() => {
    loader.classList.add('fade-out');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 600);
  }, 500);
}

function initBackToTop() {
  const backToTop = document.getElementById('back-to-top');
  if (!backToTop) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initStickyNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar || navbar.classList.contains('navbar-solid')) return;

  const onScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  };

  onScroll();
  window.addEventListener('scroll', onScroll);
}

function initActiveNavLink() {
  const navLinks = document.querySelectorAll('.navbar .nav-link');
  const currentPath = window.location.pathname;
  const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;

    const linkPage = href.substring(href.lastIndexOf('/') + 1);

    if (
      linkPage === currentPage ||
      (currentPage === 'index.html' && (href === 'index.html' || href === '../index.html' || href === './'))
    ) {
      link.classList.add('active');
    }
  });
}

function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}

function initMobileNav() {
  const navCollapse = document.getElementById('mainNav');
  const toggler = document.querySelector('.custom-toggler');
  if (!navCollapse) return;

  navCollapse.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992 && navCollapse.classList.contains('show')) {
        const instance = bootstrap.Collapse.getInstance(navCollapse);
        if (instance) instance.hide();
      }
    });
  });

  if (toggler) {
    navCollapse.addEventListener('show.bs.collapse', () => {
      toggler.classList.add('is-open');
      toggler.setAttribute('aria-expanded', 'true');
    });

    navCollapse.addEventListener('hide.bs.collapse', () => {
      toggler.classList.remove('is-open');
      toggler.setAttribute('aria-expanded', 'false');
    });
  }
}
