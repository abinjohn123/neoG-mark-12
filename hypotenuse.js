'use strict';
const form = document.getElementById('triangle-form');
const sideInput0 = document.getElementById('side-0');
const sideInput1 = document.getElementById('side-1');
const outputEl = document.getElementById('output');

function inputsValid(...sides) {
  let validator = true;
  sides.forEach((side, i) => {
    if (side <= 0) {
      document.querySelector(`#alert-side-${i}`).classList.remove('hidden');
      document.querySelector(`#side-${i}`).classList.add('border-danger');

      validator = false;
    } else {
      document.querySelector(`#alert-side-${i}`).classList.add('hidden');
      document.querySelector(`#side-${i}`).classList.remove('border-danger');
    }
  });

  return validator;
}

// Event Handlers
function calculateHypotenuse(e) {
  e.preventDefault();
  outputEl.innerText = '';
  const side0 = Number.parseInt(sideInput0.value);
  const side1 = Number.parseInt(sideInput1.value);

  if (!inputsValid(side0, side1)) return;

  const hypotenuse = Number(Math.sqrt(side0 ** 2 + side1 ** 2).toFixed(2));
  outputEl.innerText = `Hypotenuse: ${hypotenuse}`;
}

// Event Listeners
form.addEventListener('submit', calculateHypotenuse);
