'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initSkillBars();
});

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
