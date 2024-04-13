//Write a script which generates a random hexadecimal number.
/*
function generateRandomHexadecimal() {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const hexadecimalString = randomNumber.toString(16).toUpperCase(); 
    return hexadecimalString;
}

const randomHexadecimal = generateRandomHexadecimal();

console.log("Random hexadecimal number:", randomHexadecimal);
*/
function generateRandomHexadecimal(length) {
    const hexChars = '0123456789ABCDEF';
    let randomHex = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * hexChars.length);
        randomHex += hexChars.charAt(randomIndex);
    }
    return randomHex;
}

const randomHexadecimal = generateRandomHexadecimal(6);

console.log("Random Hexadecimal Number:", randomHexadecimal);
