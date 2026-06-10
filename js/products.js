'use strict';

const CART_KEY = 'cart';

document.addEventListener('DOMContentLoaded', () => {
  updateBadge();
  initAddToCart();
});

function getCart() {
  const stored = localStorage.getItem(CART_KEY);
  return stored ? JSON.parse(stored) : [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(id, name, price) {
  const cart = getCart();
  cart.push({ id, name, price });
  saveCart(cart);
  updateBadge();
  showToast(name);
}

function updateBadge() {
  const badge = document.getElementById('cart-count');
  if (!badge) return;

  const count = getCart().length;

  if (count > 0) {
    badge.textContent = count;
    badge.classList.remove('d-none');
  } else {
    badge.classList.add('d-none');
  }
}

function showToast(productName) {
  const toastEl = document.getElementById('cart-toast');
  if (!toastEl) return;

  const toastBody = toastEl.querySelector('.toast-body');
  if (toastBody) {
    toastBody.textContent = `${productName} added to cart!`;
  }

  const toast = bootstrap.Toast.getOrCreateInstance(toastEl);
  toast.show();
}

function initAddToCart() {
  const buttons = document.querySelectorAll('.add-to-cart');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const name = btn.getAttribute('data-name');
      const price = parseFloat(btn.getAttribute('data-price'));
      addToCart(id, name, price);
    });
  });
}
