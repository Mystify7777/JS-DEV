/*
Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120 */

let hoursWorked = prompt("Enter the number of hours worked:");
let ratePerHour = prompt("Enter the rate per hour:");

hoursWorked = parseFloat(hoursWorked);
ratePerHour = parseFloat(ratePerHour);

const weeklyEarnings = hoursWorked * ratePerHour;

console.log("Your weekly earning is:", weeklyEarnings);
//run it in console