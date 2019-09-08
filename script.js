/*
Variables and data types
*/
/*
var firstName = 'Joan';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
// var 3years = "3 years";
var joanMary = "";
// var if = 23;
// var &this = "";
*/

/*
Variable mutation and type coercion
*/

// // Type coercion
// var firstName = 'Joan';
// var age = 28;
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'Teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '.Is she married? ' + isMarried);

// // Variable mutation
// age = 'twenty eight';
// job = 'driver';

// alert(firstName + ' is a ' + age + ' year old ' + job + '.Is she married? ' + isMarried);

// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName);

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true")
*/

// // store mass and height in vars
// var marksMass = 78;
// var marksHeight = 1.69;

// var johnsMass = 92;
// var johnsHeight = 1.95;

// // caluate both BMIS
// // var marksBmi = marksMass / (marksHeight * marksHeight);
// // var johnsBmi = johnsMass / (johnsHeight * johnsHeight);

// function bmi(mass, height) {
//   return mass / (height * height);
// }

// var marksBmi = bmi(marksMass, marksHeight);
// var johnsBmi = bmi(johnsMass, johnsHeight);

// console.log(marksBmi, johnsBmi);

// // boolean for is marks bmi higher then johns
// var isMarksBmiHigher = marksBmi > johnsBmi;

// // print to console
// console.log('Is Mark\'s BMI higher than Johns?', isMarksBmiHigher);

/*****************************
 * Video 18
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

// // 1. Calculate the average score for each team

// // var johnsTeamsScores = [89, 120, 103];

// var johnsTeamsAvgScore = (89 + 120 + 103) / 3;
// console.log(johnsTeamsAvgScore);

// // var mikesTeamsScores = [116, 94, 123];
// var mikesTeamsAvgScore = (116 + 94 + 123) / 3;
// console.log(mikesTeamsAvgScore);

// // 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
// var marysTeamsAvgScore = (97 + 134 + 105) / 3;
// console.log(marysTeamsAvgScore);

// // 2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
// // 3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

// // if (
// //   johnsTeamsAvgScore === mikesTeamsAvgScore &&
// //   marysTeamsAvgScore === mikesTeamsAvgScore &&
// //   johnsTeamsAvgScore === marysTeamsAvgScore
// // ) {
// //   console.log(
// //     'DRAW!!! ' +
// //       'Johns teams score: ' +
// //       johnsTeamsAvgScore +
// //       ' Mikes teams score ' +
// //       mikesTeamsAvgScore +
// //       ' Marys teams score ' +
// //       mikesTeamsAvgScore
// //   );
// // } else if (
// //   johnsTeamsAvgScore > mikesTeamsAvgScore &&
// //   johnsTeamsAvgScore > marysTeamsAvgScore
// // ) {
// //   console.log('Johns team wins: ' + johnsTeamsAvgScore);
// // } else if (
// //   mikesTeamsAvgScore > johnsTeamsAvgScore &&
// //   mikesTeamsAvgScore > marysTeamsAvgScore
// // ) {
// //   console.log('Mikes team wins: ' + mikesTeamsAvgScore);
// // } else {
// //   console.log('Marys team wins: ' + marysTeamsAvgScore);
// // }

// if (
//   johnsTeamsAvgScore > mikesTeamsAvgScore &&
//   johnsTeamsAvgScore > marysTeamsAvgScore
// ) {
//   console.log('Johns team wins: ' + johnsTeamsAvgScore);
// } else if (
//   mikesTeamsAvgScore > johnsTeamsAvgScore &&
//   mikesTeamsAvgScore > marysTeamsAvgScore
// ) {
//   console.log('Mikes team wins: ' + mikesTeamsAvgScore);
// } else if (
//   marysTeamsAvgScore > johnsTeamsAvgScore &&
//   marysTeamsAvgScore > mikesTeamsAvgScore
// ) {
//   console.log('Marys team wins: ' + marysTeamsAvgScore);
// } else {
//   console.log('DRAW!!!');
// }

/*************
 * FUNCTIONS
 * these are function statements
 ***************/

// function calculateAge(birthYear) {
//   return 2019 - birthYear;
// }

// var ageLibby = calculateAge(1974);
// console.log(ageLibby);

// function yearsUntilRetire(year, firstName) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(firstName + ' retires in ' + retirement + ' years');
//   } else {
//     console.log(firstName + ' is already retired');
//   }
// }

// yearsUntilRetire(1950, 'Libby');

/*************
 * Functions statements and expressions
 ***************/
// // Function statement / declaration?

// function whatDoYouDo(job, firstName) {}

// //  Function expression

// var whatDoYouDo = function(job, firstName) {
//   switch (job) {
//     case 'teacher':
//       return firstName + ' teaches';
//     case 'driver':
//       return firstName + ' drives';
//     case 'designer':
//       return firstName + ' designs';
//     default:
//       return firstName + ' does something else';
//   }
// };

// console.log(whatDoYouDo('teacher', 'Libby'));

/*************
 Arrays
 ***************/

// var names = ['john', 'mark', 'jane'];
// console.log(names);

// var years = new Array(1990, 1991, 1992);

// names[1] = 'Ben';
// names[5] = 'Mary';
// console.log(names);

// // diff data types

// var lib = ['lib', 45, 'new job', true];
// console.log(lib);

// lib.push('yesssss');
// console.log(lib);

// console.log(lib.indexOf(45));
// console.log(lib.indexOf(true));

// var old = lib.indexOf(45) === -1 ? 'lib is not old' : 'lib is old';

// console.log(old);

/*****************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

// var bills = [48, 124, 268];
// console.log('Bills: ', bills);

// function calculateTips(billsArray) {
//   billTipArray = [];
//   console.log(billTipArray);
//   console.log(billTipArray);

//   billsArray.forEach(bill => {
//     if (bill < 50) {
//       billTipArray.push(bill + bill * 0.2);
//     } else if (bill >= 50 && bill < 200) {
//       billTipArray.push(bill + bill * 0.15);
//     } else {
//       billTipArray.push(bill + bill * 0.1);
//     }
//   });
//   return billTipArray;
// }

// var billsWithTips = calculateTips(bills);

// console.log('Final paid amounts: ', billsWithTips);

// =======

// var bills = [48, 124, 268];
// console.log('Bills: ', bills);

// function calculateTips(billsArray) {
//   tipArray = [];
//   billsArray.forEach(bill => {
//     if (bill < 50) {
//       tipArray.push(bill * 0.2);
//     } else if (bill >= 50 && bill < 200) {
//       tipArray.push(bill * 0.15);
//     } else {
//       tipArray.push(bill * 0.1);
//     }
//   });
//   return tipArray;
// }

// var tips = calculateTips(bills);

// console.log('Tips: ', tips);

// var finalPaidAmount = [
//   bills[0] + tips[0],
//   bills[1] + tips[1],
//   bills[2] + tips[2]
// ];

// console.log('Final paid amount: ', finalPaidAmount);

// ========

// function calculateTip(bill) {
//   var percentage;
//   if (bill < 50) {
//     percentage = 0.2;
//   } else if (bill >= 50 && bill < 200) {
//     percentage = 0.15;
//   } else {
//     percentage = 0.1;
//   }
//   return percentage * bill;
// }

// var bills = [48, 124, 268];
// console.log('Bills: ', bills);

// var tips = [
//   calculateTip(bills[0]),
//   calculateTip(bills[1]),
//   calculateTip(bills[2])
// ];

// console.log('Tips: ', tips);

// var finalPaidAmount = [
//   bills[0] + tips[0],
//   bills[1] + tips[1],
//   bills[2] + tips[2]
// ];

// console.log('Final paid amount: ', finalPaidAmount[0], finalPaidAmount[1], finalPaidAmount[2]);

/******* Objects and properties
   key value pairs
 */

// Object literal
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
};

console.log(john);
// dot notation
console.log(john.firstName);
// brackets
console.log(john['lastName']);

var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';

console.log(jane);
