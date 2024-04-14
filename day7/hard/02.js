//Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

const randomColor = rgbColorGenerator();
console.log("Random RGB Color:", randomColor);
