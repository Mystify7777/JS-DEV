//1 declare an empty array
let emptyArray = [];

//2 declare an array with more than 5 number of elements
let arrayWithMoreThanFiveElements = [1, 2, 3, 4, 5, 6, 7];

//3 find the length of your array
let lengthOfArray = arrayWithMoreThanFiveElements.length;

console.log("Length of array:", lengthOfArray);

//4 Get the first item, the middle item and the last item of the array
let array = [1, 2, 3, 4, 5, 6, 7];
// Get the first item
let firstItem = array[0];

// Get the middle item
let middleIndex = Math.floor(array.length / 2); // Calculate the middle index
let middleItem = array[middleIndex];

// Get the last item
let lastIndex = array.length - 1;
let lastItem = array[lastIndex];

console.log("First item:", firstItem); 
console.log("Middle item:", middleItem); 
console.log("Last item:", lastItem); 

//5 Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = ["string", 123, true, {key: "value"}, null, undefined];

let lengthOfMixedDataTypes = mixedDataTypes.length;

console.log("Length of mixedDataTypes array:", lengthOfMixedDataTypes);
