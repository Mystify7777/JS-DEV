//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

const celsius = 25; 
const fahrenheit = convertCelsiusToFahrenheit(celsius);
console.log("Temperature in Fahrenheit:", fahrenheit.toFixed(2)); 