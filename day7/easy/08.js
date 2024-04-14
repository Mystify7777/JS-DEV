//Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle(radius) {
    const pi = Math.PI;
    return 2 * pi * radius;
}

const radius = 5;
const circumference = circumOfCircle(radius);
console.log("Circumference of the circle:", circumference.toFixed(2)); 