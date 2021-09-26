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

const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

// Starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;

diceElement.classList.add('hidden');

// Players score
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

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
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // if true switch players
    currentScore = 0;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', function () {
  //add current score to actve plauyers scores

  // checl if plauer scoe is greater than 100
  // finish game
  // swithc the the next player
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
});
