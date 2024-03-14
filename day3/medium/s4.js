//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

let radius = prompt("Enter the radius of the circle:");
radius = parseFloat(radius);
const pi = 3.14;

const area = pi * radius * radius;
const circumference = 2 * pi * radius;

console.log("The area of the circle is:", area);
console.log("The circumference of the circle is:", circumference);
//run it in console