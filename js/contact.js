'use strict';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
});

function initContactForm() {
  const form = document.getElementById('consultation-form');
  if (!form) return;

  const fields = form.querySelectorAll('[required]');

  fields.forEach((field) => {
    field.addEventListener('input', () => {
      if (validateField(field)) {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSubmit(form, fields);
  });
}

function validateField(field) {
  const value = field.value.trim();

  if (!value) return false;

  if (field.type === 'email') {
    return EMAIL_REGEX.test(value);
  }

  return true;
}

function handleSubmit(form, fields) {
  let allValid = true;

  fields.forEach((field) => {
    if (validateField(field)) {
      field.classList.remove('is-invalid');
      field.classList.add('is-valid');
    } else {
      field.classList.remove('is-valid');
      field.classList.add('is-invalid');
      allValid = false;
    }
  });

  if (allValid) {
    form.classList.add('d-none');
    const alert = document.getElementById('form-alert');
    if (alert) {
      alert.classList.remove('d-none');
    }
  }
}
