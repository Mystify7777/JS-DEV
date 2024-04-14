//Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

function generateUniqueRandomNumbers() {
    const uniqueNumbers = new Set(); 
    while (uniqueNumbers.size < 7) { 
        const randomNumber = Math.floor(Math.random() * 10); 
        uniqueNumbers.add(randomNumber); 
    }
    return Array.from(uniqueNumbers); 
}

console.log(generateUniqueRandomNumbers()); 