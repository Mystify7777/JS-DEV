//Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
4
const number = 10;
const sum = sumOfEven(number);
console.log("Sum of even numbers from 1 to", number, ":", sum);
