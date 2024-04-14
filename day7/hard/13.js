//Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(arr) {
    
    if (!arr.every(item => typeof item === 'number')) {
        return "Not all array items are numbers.";
    }
    
    const sum = arr.reduce((total, num) => total + num, 0);
    
    const avg = sum / arr.length;
    return avg;
}

console.log(average([1, 2, 3])); // 2
console.log(average([4, 5, '6'])); // "Not all array items are numbers."
