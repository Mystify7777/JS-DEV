/*Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12 */
let sideA = prompt("Enter the length of side a:");
let sideB = prompt("Enter the length of side b:");
let sideC = prompt("Enter the length of side c:");

sideA = parseFloat(sideA);
sideB = parseFloat(sideB);
sideC = parseFloat(sideC);

const perimeter = sideA + sideB + sideC;

console.log("The perimeter of the triangle is:", perimeter);
//run it in console