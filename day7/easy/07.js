//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function areaOfCircle(radius) {
    const pi = Math.PI;
    return pi * radius * radius;
}

const radius = 5;
const area = areaOfCircle(radius);
console.log("Area of the circle:", area.toFixed(2)); 