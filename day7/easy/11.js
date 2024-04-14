// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function calculateWeight(mass, gravity) {
    return mass * gravity;
}


const mass = 10; 
const gravity = 9.8; 
const weight = calculateWeight(mass, gravity);
console.log("Weight of the substance:", weight.toFixed(2)); 