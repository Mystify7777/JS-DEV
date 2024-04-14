//Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

function factorial(number) {
    if (number === 0 || number === 1) {
        return 1; 
    }
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}

const num = 5;
console.log(`Factorial of ${num} is:`, factorial(num));
