//Write a function which checks if all the items of the array are the same data type.
function areAllSameType(arr) {
    if (arr.length === 0) {
        return true; 
    }
    const firstType = typeof arr[0];
    return arr.every(item => typeof item === firstType); 
}

console.log(areAllSameType([1, 2, 3, 4, 5])); 
console.log(areAllSameType(['a', 'b', 'c'])); 
console.log(areAllSameType([true, false, true]));
console.log(areAllSameType([1, '2', 3])); 
console.log(areAllSameType([])); 
