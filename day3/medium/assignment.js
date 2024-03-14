//1
// Prompt the user to enter the base and height of the triangle
let base = prompt("Enter the base of the triangle:");
let height = prompt("Enter the height of the triangle:");

// Convert the input values to numbers
base = parseFloat(base);
height = parseFloat(height);

// Calculate the area of the triangle
const area1 = 0.5 * base * height;

// Display the result
console.log("The area of the triangle is:", area1);

//2
// Prompt the user to enter the sides of the triangle
let sideA = prompt("Enter the length of side a:");
let sideB = prompt("Enter the length of side b:");
let sideC = prompt("Enter the length of side c:");

// Convert the input values to numbers
sideA = parseFloat(sideA);
sideB = parseFloat(sideB);
sideC = parseFloat(sideC);

// Calculate the perimeter of the triangle
const perimeter1 = sideA + sideB + sideC;

// Display the result
console.log("The perimeter of the triangle is:", perimeter1);

//3
// Prompt the user to enter the length and width of the rectangle
let length = prompt("Enter the length of the rectangle:");
let width = prompt("Enter the width of the rectangle:");

// Convert the input values to numbers
length = parseFloat(length);
width = parseFloat(width);

// Calculate the area of the rectangle
const area2 = length * width;

// Calculate the perimeter of the rectangle
const perimeter2 = 2 * (length + width);

// Display the results
console.log("The area of the rectangle is:", area2);
console.log("The perimeter of the rectangle is:", perimeter2);

//4
// Prompt the user to enter the radius of the circle
let radius = prompt("Enter the radius of the circle:");

// Convert the input value to a number
radius = parseFloat(radius);

// Define the value of pi
const pi = 3.14;

// Calculate the area of the circle
const area3 = pi * radius * radius;

// Calculate the circumference of the circle
const circumference = 2 * pi * radius;

// Display the results
console.log("The area of the circle is:", area3);
console.log("The circumference of the circle is:", circumference);

//5
// Given equation: y = 2x - 2

// Slope (m) is the coefficient of x
const slope1 = 2;

// Y-intercept (b) is the constant term
const yIntercept = -2;

// To find the x-intercept, set y = 0 and solve for x
// 0 = 2x - 2
// 2x = 2
// x = 2/2
const xIntercept = 2 / 2;

// Display the results
console.log("Slope (m):", slope1);
console.log("Y-intercept (b):", yIntercept);
console.log("X-intercept:", xIntercept);

//6
// Coordinates of the first point (x1, y1)
const x1 = 2;
const y1 = 2;

// Coordinates of the second point (x2, y2)
const x2 = 6;
const y2 = 10;

// Calculate the slope using the formula
const slope2 = (y2 - y1) / (x2 - x1);

// Display the result
console.log("The slope between the points (2, 2) and (6, 10) is:", slope2);

//7

if (slope2 === slope1) {
    console.log("The slope of both scenarios is equal.");
} else {
    console.log("The slope of both scenarios is not equal.");
}

//8
// Coefficients of the quadratic equation
const a = 1;
const b = 6;
const c = 9;

// Calculate the discriminant
const discriminant = b * b - 4 * a * c;

// Check if the discriminant is positive, negative, or zero
if (discriminant > 0) {
    // If discriminant is positive, there are two real roots
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log("There are two real roots at x =", x1, "and x =", x2);
} else if (discriminant === 0) {
    // If discriminant is zero, there is one real root (a repeated root)
    const x = -b / (2 * a);
    console.log("There is one real root at x =", x);
} else {
    // If discriminant is negative, there are no real roots
    console.log("There are no real roots.");
}

//9
// Prompt the user to enter hours worked and rate per hour
let hoursWorked = prompt("Enter the number of hours worked:");
let ratePerHour = prompt("Enter the rate per hour:");

// Convert the input values to numbers
hoursWorked = parseFloat(hoursWorked);
ratePerHour = parseFloat(ratePerHour);

// Calculate the weekly earnings
const weeklyEarnings = hoursWorked * ratePerHour;

// Display the result
console.log("Your weekly earning is:", weeklyEarnings);

//10
// Prompt the user to enter their name
let name = prompt("Enter your name:");

// Check if the length of the name is greater than 7
if (name.length > 7) {
    console.log("Your name is long.");
} else {
    console.log("Your name is short.");
}

//11
let firstName = 'Asabeneh';
let lastName = 'Yetayeh';

// Compare the lengths of the first name and the last name
if (firstName.length > lastName.length) {
    console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}.`);
} else if (firstName.length < lastName.length) {
    console.log(`Your last name, ${lastName} is longer than your first name, ${firstName}.`);
} else {
    console.log(`Your first name, ${firstName} and last name, ${lastName} have the same length.`);
}

//12
let myAge = 250;
let yourAge = 25;

// Calculate the age difference
let ageDifference;
if (myAge > yourAge) {
    ageDifference = myAge - yourAge;
    console.log(`I am ${ageDifference} years older than you.`);
} else if (myAge < yourAge) {
    ageDifference = yourAge - myAge;
    console.log(`You are ${ageDifference} years older than me.`);
} else {
    console.log("We are the same age.");
}

//13
// Prompt the user to enter their birth year
let birthYear = prompt("Enter your birth year:");

// Calculate the user's age
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

// Check if the user is 18 or above
if (age >= 18) {
    console.log(`You are ${age}. You are old enough to drive.`);
} else {
    let yearsToWait = 18 - age;
    console.log(`You are ${age}. You will be allowed to drive after ${yearsToWait} years.`);
}

//14
// Prompt the user to enter the number of years they have lived
let years = prompt("Enter number of years you have lived:");

// Convert years to seconds assuming 1 year = 365 days and 1 day = 24 hours and 1 hour = 3600 seconds
let seconds = years * 365 * 24 * 3600;

// Display the result
console.log(`You lived ${seconds} seconds.`);

//15
// Create a new Date object
let now = new Date();

// Extract the year, month, day, hours, and minutes
let year = now.getFullYear();
let month = String(now.getMonth() + 1).padStart(2, '0');
let day = String(now.getDate()).padStart(2, '0');
let hours = String(now.getHours()).padStart(2, '0');
let minutes = String(now.getMinutes()).padStart(2, '0');

// Human-readable time formats
let format1 = `${year}-${month}-${day} ${hours}:${minutes}`;
let format2 = `${day}-${month}-${year} ${hours}:${minutes}`;
let format3 = `${day}/${month}/${year} ${hours}:${minutes}`;

// Display the results
console.log("YYYY-MM-DD HH:mm:", format1);
console.log("DD-MM-YYYY HH:mm:", format2);
console.log("DD/MM/YYYY HH:mm:", format3);
