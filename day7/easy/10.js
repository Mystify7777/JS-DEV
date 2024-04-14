//Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function calculateSpeed(distance, time) {
    return distance / time;
}

const distance = 100; 
const time = 2; 
const speed = calculateSpeed(distance, time);
console.log("Speed of the object:", speed.toFixed(2)); 