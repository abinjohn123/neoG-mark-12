'use strict';

const form = document.getElementById('quiz-form');
const outputEl = document.getElementById('output');

const correctAnswers = {
  'q-0': 'b',
  'q-1': 'c',
  'q-2': 'b',
  'q-3': 'c',
  'q-4': 'c',
  'q-5': 'a',
  'q-6': 'b',
  'q-7': 'a',
  'q-8': 'a',
  'q-9': 'a',
};

function outputScore(score) {
  if (score === 10) outputEl.innerText = 'You scored full marks!!';
  else outputEl.innerText = `Your score is ${score}!`;
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
