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

// Type coercion
var firstName = 'Joan';
var age = 28;
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '.Is she married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '.Is she married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
