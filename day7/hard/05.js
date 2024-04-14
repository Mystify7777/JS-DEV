//Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

function convertHexaToRgb(hexColor) {
    hexColor = hexColor.replace('#', '');
    
    const red = parseInt(hexColor.substring(0, 2), 16);
    const green = parseInt(hexColor.substring(2, 4), 16);
    const blue = parseInt(hexColor.substring(4, 6), 16);
    
    return `rgb(${red}, ${green}, ${blue})`;
}

const hexColor = "#FaAb31"; 
const rgbColor = convertHexaToRgb(hexColor);
console.log("RGB Color:", rgbColor);
