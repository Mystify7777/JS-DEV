//Develop a small script which generate array of 5 random numbers
function generateRandomArray(length, min, max) {
    let randomArray = [];
    for (let i = 0; i < length; i++) {
        randomArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return randomArray;
}

const randomNumbers = generateRandomArray(5, 1, 100);

console.log("Random numbers:", randomNumbers);
