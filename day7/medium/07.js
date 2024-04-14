//Declare a function name capitalizeArray. It takes array as a parameter and itreturns the - capitalizedarray.
function capitalizeArray(arr) {
    const capitalizedArray = [];
    for (let i = 0; i < arr.length; i++) {
        capitalizedArray.push(arr[i].toUpperCase());
    }
    return capitalizedArray;
}
const array = ["apple", "banana", "cherry"];
const capitalizedArray = capitalizeArray(array);
console.log("Original array:", array);
console.log("Capitalized array:", capitalizedArray);
