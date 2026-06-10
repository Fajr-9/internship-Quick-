'use strict';

let expression = '';
let justCalculated = false;

document.addEventListener('DOMContentLoaded', () => {
  initCalculator();
  updateDisplay();
});

function initCalculator() {
  const buttons = document.querySelectorAll('.calc-btn');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-value');
      handleInput(val);
    });
  });
}

function handleInput(val) {
  if (val === 'C') {
    expression = '';
    justCalculated = false;
    updateDisplay();
    return;
  }

  if (val === '⌫') {
    expression = expression.slice(0, -1);
    justCalculated = false;
    updateDisplay();
    return;
  }

  if (val === '±') {
    if (expression) {
      if (expression.startsWith('-')) {
        expression = expression.slice(1);
      } else {
        expression = `-${expression}`;
      }
    }
    justCalculated = false;
    updateDisplay();
    return;
  }

  if (val === '%') {
    if (expression) {
      expression = String(parseFloat(expression) / 100);
    }
    justCalculated = false;
    updateDisplay();
    return;
  }

  if (val === '=') {
    calculate();
    return;
  }

  const operators = ['/', '*', '-', '+'];

  if (justCalculated && !operators.includes(val)) {
    expression = '';
  }

  if (justCalculated && operators.includes(val)) {
    justCalculated = false;
  }

  expression += val;
  updateDisplay();
}

function calculate() {
  try {
    const result = Function(`'use strict'; return (${expression})`)();
    if (!isFinite(result)) {
      expression = 'Error';
    } else {
      expression = String(result);
    }
  } catch {
    expression = 'Error';
  }
  justCalculated = true;
  updateDisplay();
}

function updateDisplay() {
  const expressionEl = document.querySelector('.display-expression');
  const resultEl = document.querySelector('.display-result');

  if (!expressionEl || !resultEl) return;

  if (expression === 'Error') {
    expressionEl.textContent = '';
    resultEl.textContent = 'Error';
    return;
  }

  expressionEl.textContent = expression || '';
  resultEl.textContent = expression || '0';
}
