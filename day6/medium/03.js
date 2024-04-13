//Write a script which generates a random rgb color number.
function generateRandomRgbColor() {
    const red = Math.floor(Math.random() * 256); 
    const green = Math.floor(Math.random() * 256); 
    const blue = Math.floor(Math.random() * 256); 
    const rgbColor = `rgb(${red}, ${green}, ${blue})`; 
    return rgbColor;
}

const randomRgbColor = generateRandomRgbColor();

console.log("Random RGB color:", randomRgbColor);
