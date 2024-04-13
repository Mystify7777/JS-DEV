/*
The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs()
method
*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Step 1: Sort the array to find the minimum and maximum age
ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log("Minimum age:", minAge);
console.log("Maximum age:", maxAge);

// Step 2: Calculate the median age
let medianAge;
if (ages.length % 2 === 0) {
    medianAge = (ages[Math.floor(ages.length / 2) - 1] + ages[Math.floor(ages.length / 2)]) / 2;
} else {
    medianAge = ages[Math.floor(ages.length / 2)];
}
console.log("Median age:", medianAge);

// Step 3: Calculate the average age
const sumOfAges = ages.reduce((acc, curr) => acc + curr, 0);
const averageAge = sumOfAges / ages.length;
console.log("Average age:", averageAge);

// Step 4: Calculate the range of ages
const rangeOfAges = maxAge - minAge;
console.log("Range of ages:", rangeOfAges);

// Step 5: Compare the absolute differences between min, max, and average age
const diffMinAverage = Math.abs(minAge - averageAge);
const diffMaxAverage = Math.abs(maxAge - averageAge);
console.log("Absolute difference between min and average age:", diffMinAverage);
console.log("Absolute difference between max and average age:", diffMaxAverage);
