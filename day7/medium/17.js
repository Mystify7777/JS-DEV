//Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
function randomHexaNumberGenerator() {
    const hexChars = "0123456789ABCDEF";
    let hexNumber = "";
    for (let i = 0; i < 6; i++) {
        hexNumber += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
    }
    return hexNumber;
}

const randomHexNumber = randomHexaNumberGenerator();
console.log("Random Hexadecimal Number:", randomHexNumber);
