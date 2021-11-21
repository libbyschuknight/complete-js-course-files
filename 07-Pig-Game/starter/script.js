'use strict';

// Selecting elements
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');

const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

// Players score
let scores, currentScore, activePlayer, playing;

const initiateGame = function () {
  // Reset starting conditions
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;

  diceElement.classList.add('hidden');

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  // Reset playing and UI
  playing = true;

  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
};
initiateGame();

const switchPlayers = function () {
  currentScore = 0;

  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;

  activePlayer = activePlayer === 0 ? 1 : 0;

  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
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
      switchPlayers();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //add current score to active players scores
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check if player score is less than 100
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceElement.classList.add('hidden');

      // finish game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      console.log('You have won!');
    } else {
      // switch the the next player
      switchPlayers();
    }
  }
});

btnNewGame.addEventListener('click', initiateGame);
