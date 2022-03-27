'use strict';

// global scope
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are the ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // create new var with same name as outer scopes var
      const firstName = 'Misty';

      // reassigning outer scopes var
      output = 'NEW OUTPUT';

      var millennial = true; // functioned scoped, not block scoped
      const string = `Oh, and you are a millennial, ${firstName}`;
      console.log(string);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(string); // out of scope
    console.log(millennial); // millennial var is functioned scoped, not block scoped
    // add(2, 3); // This function is blocked scoped, this here returns an error, but only in strict mode

    console.log(output);
  }
  printAge();
}

const firstName = 'Libby'; // global variable
calcAge(1991);

// console.log(age);  // out of scope
// printAge(); // out fo scope

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
// // global scope
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);
//   return age;
// }

// const firstName = 'Libby'; // global variable
// calcAge(1991);
