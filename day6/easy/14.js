//Develop a small script which generate array of 5 random numbers and the numbers must be unique
function generateUniqueRandomArray(length, min, max) {
    let randomArray = [];
    while (randomArray.length < length) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!randomArray.includes(randomNumber)) {
            randomArray.push(randomNumber);
        }
    }
    return randomArray;
}

const uniqueRandomNumbers = generateUniqueRandomArray(5, 1, 100);

console.log("Unique random numbers:", uniqueRandomNumbers);
