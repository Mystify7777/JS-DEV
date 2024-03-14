/*Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0. */
 

// Define Coefficients 
const a = 1;
const b = 6;
const c = 9;

// Calculate discriminant
const discriminant = b * b - 4 * a * c;

// Check if the discriminant is positive, negative, or zero
if (discriminant > 0) {
    // If discriminant is positive, there are two real roots
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log("There are two real roots at x =", x1, "and x =", x2);
} else if (discriminant === 0) {
    // If discriminant is zero, there is one real root (a repeated root)
    const x = -b / (2 * a);
    console.log("There is one real repeated root at x =", x);
} else {
    // If discriminant is negative, there are no real roots
    console.log("There are no real roots.");
}
