//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
function isEven(number) {
    return number % 2 === 0;
}

let userInput = prompt("Enter a number:");

let number = parseInt(userInput);

if (isEven(number)) {
    console.log(`${number} is an even number.`);
} else {
    console.log(`${number} is not an even number.`);
}

