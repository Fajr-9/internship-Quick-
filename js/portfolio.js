'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initSkillBars();
});

function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.setAttribute('data-theme', savedTheme);
  updateThemeIcon(toggle, savedTheme);

  toggle.addEventListener('click', () => {
    const current = document.body.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(toggle, next);
  });
}

function updateThemeIcon(toggle, theme) {
  toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

function initSkillBars() {
  const skillFills = document.querySelectorAll('.skill-fill');
  if (!skillFills.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          const width = fill.getAttribute('data-width');
          fill.style.width = `${width}%`;
          observer.unobserve(fill);
        }
      });
    },
    { threshold: 0.5 }
  );

  skillFills.forEach((fill) => observer.observe(fill));
}
