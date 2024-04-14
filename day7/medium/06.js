//Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr) {
    const reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

// Example usage:
const array = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(array);
console.log("Original array:", array);
console.log("Reversed array:", reversedArray);
