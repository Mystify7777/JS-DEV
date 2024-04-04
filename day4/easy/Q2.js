/*Compare the values of myAge and yourAge using if ... else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input. */
let yourAge = prompt("Enter your age:");

yourAge = parseInt(yourAge);

let myAge = 20; 

if (myAge > yourAge) {
    console.log("I am older than you.");
} else if (myAge < yourAge) {
    console.log("You are older than me.");
} else {
    console.log("We are of the same age.");
}
