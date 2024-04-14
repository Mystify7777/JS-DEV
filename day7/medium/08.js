//Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

function addItem(item, arr) {
    arr.push(item);
    return arr;
}

const originalArray = ["apple", "banana", "cherry"];
const newItem = "orange";
console.log("Original array:", originalArray);

const updatedArray = addItem(newItem, originalArray);
console.log("Updated array:", updatedArray);
