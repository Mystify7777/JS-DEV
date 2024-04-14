//Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(index, arr) {
    arr.splice(index, 1);
    return arr;
}

const originalArray = ["apple", "banana", "cherry"];
const indexToRemove = 1; 
console.log("Original array:", originalArray);
const updatedArray = removeItem(indexToRemove, originalArray);
console.log("Updated array:", updatedArray);
