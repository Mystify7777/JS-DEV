//Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

function findMax(a, b, c) {
    let max = a; 
    if (b > max) {
        max = b; 
    }
    
    if (c > max) {
        max = c; 
    }
    
    return max;
}

const num1 = 10;
const num2 = 20;
const num3 = 15;
const maxNumber = findMax(num1, num2, num3);
console.log("Maximum number:", maxNumber); 
