//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        // Even number
        sumEven += i;
    } else {
        // Odd number
        sumOdd += i;
    }
}

const sumsArray = [sumEven, sumOdd];

console.log("Sum of evens and odds as array:", sumsArray);
