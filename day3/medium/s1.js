/*Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
Enter base: 20
Enter height: 10
The area of the triangle is 100 */

let base = prompt("Enter the base of the triangle:");
let height = prompt("Enter the height of the triangle:");

base = parseFloat(base);
height = parseFloat(height);

const area = 0.5 * base * height;

console.log("The area of the triangle is:", area);
//run it in console