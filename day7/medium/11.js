//Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

function sumOfOdds(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
}

const number = 10;
const sum = sumOfOdds(number);
console.log("Sum of odd numbers from 1 to", number, ":", sum);
