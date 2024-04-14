//Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c, x, y) {
    return a * x + b * y + c;
}

// Example usage:
const a = 2;
const b = 3;
const c = -6;
const x = 4;
const y = 5;
const result = solveLinEquation(a, b, c, x, y);
console.log("Result of the linear equation:", result); // Output: 10
