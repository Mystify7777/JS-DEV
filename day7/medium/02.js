//Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(a, b, c) {
    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [x1, x2];
    } else if (discriminant === 0) {
        const x = -b / (2 * a);
        return [x];
    } else {
        return "No real roots";
    }
}

const a = 1;
const b = -3;
const c = 2;
const roots = solveQuadEquation(a, b, c);
console.log("Roots of the quadratic equation:", roots); 
