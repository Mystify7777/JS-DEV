/*Declare two variables myAge and yourAge and assign them initial values and
myAge and yourAge.

let myAge = 250
let yourAge = 25
I am 225 years older than you. */

let myAge = 21;
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
