//. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

function modifyArray(arr) {
    if (arr.length < 5) {
        return 'item not found';
    }
    

    arr[4] = 'modified';
    return arr;
}

console.log(modifyArray([1, 2, 3, 4, 5])); 
console.log(modifyArray([1, 2, 3, 4])); 
