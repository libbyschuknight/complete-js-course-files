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

// 1. Calculate the average score for each team
