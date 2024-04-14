//Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

const number = 5;
const sum = sumOfNumbers(number);
console.log("Sum of numbers from 1 to", number, ":", sum);
