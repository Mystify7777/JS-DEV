//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    } else {
        sumOdd += i;
    }
}

console.log("The sum of all even numbers from 0 to 100:", sumEven);
console.log("The sum of all odd numbers from 0 to 100:", sumOdd);
