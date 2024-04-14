//Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(num) {
    const colors = [];
    for (let i = 0; i < num; i++) {
        let hexColor = "#";
        for (let j = 0; j < 6; j++) {
            hexColor += Math.floor(Math.random() * 16).toString(16);
        }
        colors.push(hexColor);
    }
    return colors;
}

const numberOfColors = 5;
const hexColors = arrayOfHexaColors(numberOfColors);
console.log("Array of Hexadecimal Colors:", hexColors);
