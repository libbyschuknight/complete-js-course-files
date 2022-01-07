'use strict';

// // global scope
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);
//   return age;
// }

// const firstName = 'Libby'; // global variable
// calcAge(1991);

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
