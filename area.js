'use strict';
const form = document.getElementById('triangle-form');
const sideInput0 = document.getElementById('side-0');
const sideInput1 = document.getElementById('side-1');
const outputEl = document.getElementById('output');
const dangerBorderClassList = ['border', 'border-2', 'border-danger'];

function inputsValid(...sides) {
  let validator = true;
  sides.forEach((side, i) => {
    if (side <= 0) {
      document.querySelector(`#alert-side-${i}`).classList.remove('hidden');
      document
        .querySelector(`#side-${i}`)
        .classList.add(...dangerBorderClassList);

      validator = false;
    } else {
      document.querySelector(`#alert-side-${i}`).classList.add('hidden');
      document
        .querySelector(`#side-${i}`)
        .classList.remove(...dangerBorderClassList);
    }
  });

  return validator;
}

// Event Handlers
function calculateArea(e) {
  e.preventDefault();
  const side0 = Number.parseInt(sideInput0.value);
  const side1 = Number.parseInt(sideInput1.value);

  if (!inputsValid(side0, side1)) return;

  const area = Number((0.5 * side0 * side1).toFixed(2));
  outputEl.innerText = `Area: ${area}`;
}

// Event Listeners
form.addEventListener('submit', calculateArea);
