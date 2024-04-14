//Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

function evensAndOdds(num) {
    let evenCount = 0;
    let oddCount = 0;
    
   
    const numStr = num.toString();
    
  
    for (let i = 0; i < numStr.length; i++) {
        const digit = parseInt(numStr[i]);
        if (digit % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    
    return { evenCount, oddCount };
}

const number = 123456789;
const counts = evensAndOdds(number);
console.log("Number of even digits:", counts.evenCount);
console.log("Number of odd digits:", counts.oddCount);
