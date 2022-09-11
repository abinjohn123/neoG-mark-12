'use strict';

const form = document.getElementById('quiz-form');
const outputEl = document.getElementById('output');

const correctAnswers = {
  'q-0': 'b',
  'q-1': 'c',
  'q-2': 'b',
  'q-3': 'c',
};

function outputScore(score) {
  outputEl.innerText = `Your score is ${score}!`;
}

// Event handler
function calcScore(e) {
  e.preventDefault();
  let score = 0;
  const formData = new FormData(form);
  for (const [qus, ans] of formData.entries()) {
    if (correctAnswers[qus] === ans) score++;
  }

  outputScore(score);
}

// Event Listener
form.addEventListener('submit', calcScore);
