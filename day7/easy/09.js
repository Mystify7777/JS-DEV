//Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function calculateDensity(mass, volume) {
    return mass / volume;
}

const mass = 100; 
const volume = 50; 
const density = calculateDensity(mass, volume);
console.log("Density of the substance:", density.toFixed(2)); 