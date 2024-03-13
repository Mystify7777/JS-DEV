//1
let firstName=`Aryan`;
let lastName=`Kumar`;
let country=`India`;
let city=`Gaya`;
let age=20;
let isMarried=false;
let year=2024;

console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))

//2
console.log(typeof('10')==typeof(10));

//3
console.log(parseInt('9.8')==10);

//4
//Truthy values:

let x = 10; // Assigning a non-zero number to a variable.
let y = 'Hello'; // Assigning a non-empty string to a variable.
let z = true; // Assigning the boolean value true to a variable.

//Falsy values:

let a = 0; // Assigning zero to a variable.
let b = ''; // Assigning an empty string to a variable.
let c = false; // Assigning the boolean value false to a variable.

//5
console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != '4'); // false
console.log(4 == '4'); // true
console.log(4 === '4'); // false
console.log('python'.length !== 'jargon'.length); // false

//6
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4')); // true
console.log(!('dragon'.includes('on') && 'python'.includes('on'))); // false

//7
// Create a new Date object representing the current date and time
const now = new Date();

// 1. What is the year today?
const yeaR = now.getFullYear();

// 2. What is the month today as a number? (Note: January is 0, February is 1, and so on...)
const month = now.getMonth() + 1;

// 3. What is the date today?
const date = now.getDate();

// 4. What is the day today as a number? (Note: Sunday is 0, Monday is 1, and so on...)
const day = now.getDay();

// 5. What is the hours now?
const hours = now.getHours();

// 6. What is the minutes now?
const minutes = now.getMinutes();

// 7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
const secondsElapsed = Math.floor(now.getTime() / 1000);

// Display the results
console.log("1. Year today:", year);
console.log("2. Month today:", month);
console.log("3. Date today:", date);
console.log("4. Day today:", day);
console.log("5. Hours now:", hours);
console.log("6. Minutes now:", minutes);
console.log("7. Seconds elapsed since January 1, 1970:", secondsElapsed);


