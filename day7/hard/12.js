//Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(arr) {
    if (!arr.every(item => typeof item === 'number')) {
        return "Not all array items are numbers.";
    }
    
    const sum = arr.reduce((total, num) => total + num, 0);
    return sum;
}

console.log(sumOfArrayItems([1, 2, 3])); // 6
console.log(sumOfArrayItems([4, 5, '6'])); // "Not all array items are numbers."
