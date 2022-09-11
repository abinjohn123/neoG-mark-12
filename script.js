'use strict';

const angleInput0 = document.getElementById('angle-0');
const angleInput1 = document.getElementById('angle-1');
const angleInput2 = document.getElementById('angle-2');
const form = document.getElementById('triangle-form');

const dangerBorderClassList = ['border', 'border-2', 'border-danger'];

function inputsValid(...angles) {
  let validator = true;
  angles.forEach((angle, i) => {
    if (angle <= 0) {
      document.querySelector(`#alert-angle-${i}`).classList.remove('hidden');
      document
        .querySelector(`#angle-${i}`)
        .classList.add(...dangerBorderClassList);

      validator = false;
    } else {
      document.querySelector(`#alert-angle-${i}`).classList.add('hidden');
      document
        .querySelector(`#angle-${i}`)
        .classList.remove(...dangerBorderClassList);
    }
  });

  return validator;
}

// Event Handlers
function formSubmitHandler(e) {
  e.preventDefault();
  const angle0 = Number.parseInt(angleInput0.value);
  const angle1 = Number.parseInt(angleInput1.value);
  const angle2 = Number.parseInt(angleInput2.value);
  if (!inputsValid(angle0, angle1, angle2)) return;

  const angleSum = angle0 + angle1 + angle2;
  if (angleSum === 180) console.log('yes');
  else console.log('no');
}

// Event Listeners
form.addEventListener('submit', formSubmitHandler);
