// Write a function called isPrime, which checks if a number is prime number.
function isPrime(number) {
    if (number <= 1) {
        return false; // 
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // 
        }
    }
    return true; 
}

console.log(isPrime(7)); 
console.log(isPrime(14)); 
console.log(isPrime(1)); 
console.log(isPrime(-11)); 
