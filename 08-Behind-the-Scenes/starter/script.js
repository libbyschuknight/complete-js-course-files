'use strict';

// Hoisting
// Variables
// console.log(me); // undefined
// console.log(job); //script.js:4 Uncaught ReferenceError: Cannot access 'job' before initialization
// console.log(year); //script.js:5 Uncaught ReferenceError: Cannot access 'year' before initialization, when line 4 commented out

var me = 'Libby';
let job = 'developer';
const year = 1965;

// Functions

// console.log(addDecl(2, 3)); // 5
// console.log(addExpr(2, 3)); // script.js:16 Uncaught ReferenceError: Cannot access 'addExpr' before initialization
// console.log(addArrow(2, 3)); // script.js:17 Uncaught ReferenceError: Cannot access 'addArrow' before initialization

// func declaration
function addDecl(a, b) {
  return a + b;
}

// func expression - assigning a function value to the const, in the temporal dead zone
// const addExpr = function (a, b) {
//   return a + b;
// };

var addExpr = function (a, b) {
  return a + b;
};
// Uncaught TypeError: addExpr is not a function
// basically doing undefined(2, 3), which gives the same error, as using var it is hoisted but sent as undefined

// arrow func
const addArrow = (a, b) => a + b;

// Example
// console.log(numProducts); // undefined, falsy value

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;
// function deleteShoppingCart() {
//   console.log('All products are deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// // is it a property of window?
// console.log(x === window.x); // window.x true
// console.log(y === window.y); // false
// console.log(z === window.z); // false

// this keyword

///////////////////////////////////////
// The this Keyword in Practice
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

// const f = jonas.calcAge;
// f();
