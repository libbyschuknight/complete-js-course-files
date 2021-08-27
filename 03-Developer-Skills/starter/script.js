// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;

// const calcAge = birthYear => 2037 - birthYear;

// console.log(calcAge(1991));

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// create function that takes an array of max temps
// log a string that has temp for each day
// each temp record is 1 day -  use length of array + 1 to get day

// const printForecast = function (array) {
//   let stringArray = [];

//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];

//     stringArray.push(`... ${element}°C in ${index + 1} days`);
//   }

//   return stringArray.join(' ');
// };

const printForecast = function (array) {
  let string = '';

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    string = string.concat(`... ${element}°C in ${index + 1} days`);
  }
  return string + ' ...';
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(printForecast(data1));
console.log(printForecast(data2));
