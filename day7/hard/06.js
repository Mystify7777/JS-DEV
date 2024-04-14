// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function convertRgbToHexa(rgbColor) {
    const rgbComponents = rgbColor.match(/\d+/g);
    
    const redHex = parseInt(rgbComponents[0]).toString(16).padStart(2, '0');
    const greenHex = parseInt(rgbComponents[1]).toString(16).padStart(2, '0');
    const blueHex = parseInt(rgbComponents[2]).toString(16).padStart(2, '0');
    
    return `#${redHex}${greenHex}${blueHex}`;
}

const rgbColor = "rgb(205, 110, 40)"; 
const hexColor = convertRgbToHexa(rgbColor);
console.log("Hexadecimal Color:", hexColor);
