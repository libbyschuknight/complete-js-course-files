'use strict';

// Selecting elements
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

// Starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;

diceElement.classList.add('hidden');

// Players score
let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generate a dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2 display dice
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;

  // 3 if 1,
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice;
    current0Element.textContent = currentScore; // CHANGE LATER
  } else {
    // if true switch players
  }
});
