//Write a function generateColors which can generate any number of hexa or rgb colors.

function generateColors(num, format) {
    const colors = [];
    for (let i = 0; i < num; i++) {
        let color = "";
        if (format === "hexa") {
            color = generateRandomHexaColor();
        } else if (format === "rgb") {
            color = generateRandomRgbColor();
        } else {
            console.error("Invalid format. Please choose 'hexa' or 'rgb'.");
            return;
        }
        colors.push(color);
    }
    return colors;
}

function generateRandomHexaColor() {
    let hexColor = "#";
    for (let j = 0; j < 6; j++) {
        hexColor += Math.floor(Math.random() * 16).toString(16);
    }
    return hexColor;
}

function generateRandomRgbColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}
const numberOfColors = 5;
const hexColors = generateColors(numberOfColors, "hexa");
console.log("Generated Hexadecimal Colors:", hexColors);

const rgbColors = generateColors(numberOfColors, "rgb");
console.log("Generated RGB Colors:", rgbColors);
