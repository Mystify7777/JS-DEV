//Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors(num) {
    const colors = [];
    for (let i = 0; i < num; i++) {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        colors.push(`rgb(${red}, ${green}, ${blue})`);
    }
    return colors;
}

const numberOfColors = 5;
const rgbColors = arrayOfRgbColors(numberOfColors);
console.log("Array of RGB Colors:", rgbColors);
