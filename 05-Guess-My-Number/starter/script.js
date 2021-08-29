'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct number';

// const number = (document.querySelector('.number').textContent = 13);
// const score = (document.querySelector('.score').textContent = 11);

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 33;
// console.log(document.querySelector('.guess').value);

// PROJECT 1: Guess my number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // when no input
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    // when player wins
    document.querySelector('.message').textContent = '🎉 Correct number';
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    // Logic refactored
    // when guess is wrong
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high' : 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose!!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // handler function  / anonymous function as it doesn't have a name
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
});

///////////////////////////////////////
// Coding Challenge #1

/*
Implement a game reset functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

// My attempt at starting to refactoring - not complete refactor

// // PROJECT 1: Guess my number
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;

// let highScore = 0;

// const setMessage = function (content) {
//   document.querySelector('.message').textContent = content;
// };

// const loser = function () {
//   document.querySelector('.message').textContent = 'You lose!!';
//   setMessage('You lose!!');

//   document.querySelector('.score').textContent = 0;
// };

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);

//   if (!guess) {
//     // when no input
//     // document.querySelector('.message').textContent = '⛔ No number!';
//     setMessage('⛔ No number!');
//   } else if (guess === secretNumber) {
//     // when player wins
//     // document.querySelector('.message').textContent = '🎉 Correct number';
//     setMessage('.message', '⛔ No number!');

//     document.querySelector('body').style.background = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     document.querySelector('.number').textContent = secretNumber;

//     if (score > highScore) {
//       highScore = score;
//       document.querySelector('.highscore').textContent = highScore;
//     }
//   } else if (guess > secretNumber) {
//     // when guess is too high
//     if (score > 1) {
//       score--;

//       document.querySelector('.score').textContent = score;
//       setMessage('Too high');
//     } else {
//       loser();
//     }
//   } else if (guess < secretNumber) {
//     // when guess is too low
//     if (score > 1) {
//       score--;

//       document.querySelector('.score').textContent = score;
//       setMessage('Too low');
//     } else {
//       loser();
//     }
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   // handler function  / anonymous function as it doesn't have a name
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;

//   setMessage('Start guessing...');
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.guess').value = '';

//   document.querySelector('body').style.background = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });
