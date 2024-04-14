//Write a function which takes any number of arguments and return the sum of the arguments
function sumOfArguments(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

console.log(sumOfArguments(1, 2, 3, 4, 5)); 
console.log(sumOfArguments(10, 20, 30)); 
console.log(sumOfArguments(2, 4, 6, 8, 10)); 