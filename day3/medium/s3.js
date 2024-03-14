//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let length = prompt("Enter the length of the rectangle:");
let width = prompt("Enter the width of the rectangle:");

length = parseFloat(length);
width = parseFloat(width);

const area = length * width;
const perimeter = 2 * (length + width);

console.log("The area of the rectangle is:", area);
console.log("The perimeter of the rectangle is:", perimeter);

//run it in console