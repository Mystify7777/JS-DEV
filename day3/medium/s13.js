/*Using prompt get the year the user was born and if the user is 18 or above
allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive
Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years. */

let birthYear = prompt("Enter your birth year:");

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

if (age >= 18) {
    console.log(`You are ${age}. You are old enough to drive.`);
} else {
    let yearsToWait = 18 - age;
    console.log(`You are ${age}. You will be allowed to drive after ${yearsToWait} years.`);
}
//run it in console to see outputs.