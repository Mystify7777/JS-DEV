/*Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
Enter number of years you live: 100
You lived 3153600000 seconds.
 */

let years = prompt("Enter number of years you have lived:");//20

let seconds = years * 365 * 24 * 3600;

console.log(`You lived ${seconds} seconds.`);//You lived 630720000 seconds.
