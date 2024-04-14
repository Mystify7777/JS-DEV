//Write a functions which checks if all items are unique in the array.
function areAllUnique(arr) {
    const uniqueSet = new Set(arr); 
    return uniqueSet.size === arr.length; 
}

console.log(areAllUnique([1, 2, 3, 4, 5])); // true (all items are unique)
console.log(areAllUnique([1, 2, 2, 4, 5])); // false (not all items are unique)
console.log(areAllUnique([])); // true (an empty array has all unique items)
