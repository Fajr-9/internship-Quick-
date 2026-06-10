'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initReadMore();
  initCategoryFilter();
});

function initReadMore() {
  const buttons = document.querySelectorAll('.read-more-btn');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.blog-card');
      const excerpt = card.querySelector('.excerpt');
      const fullText = card.querySelector('.full-text');

      const isExpanded = !fullText.classList.contains('d-none');

      if (isExpanded) {
        fullText.classList.add('d-none');
        excerpt.classList.remove('d-none');
        btn.textContent = 'Read More';
      } else {
        fullText.classList.remove('d-none');
        excerpt.classList.add('d-none');
        btn.textContent = 'Read Less';
      }
    });
  });
}

function initCategoryFilter() {
  const pills = document.querySelectorAll('.category-pill');
  const cards = document.querySelectorAll('.blog-card');

  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      pills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');

      const category = pill.getAttribute('data-category');

      cards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');

        if (category === 'all' || cardCategory === category) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}
