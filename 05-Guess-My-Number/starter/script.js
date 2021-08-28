'use strict';

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct number';

const number = (document.querySelector('.number').textContent = 13);
const score = (document.querySelector('.score').textContent = 11);

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 33;
console.log(document.querySelector('.guess').value);
