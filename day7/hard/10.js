//Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(value) {
  
    return value === null || value === undefined || value === '' ||
        (Array.isArray(value) && value.length === 0) ||
        (typeof value === 'object' && Object.keys(value).length === 0);
}

console.log(isEmpty(null)); // true
console.log(isEmpty(undefined)); // true
console.log(isEmpty('')); // true
console.log(isEmpty([])); // true
console.log(isEmpty({})); // true
console.log(isEmpty(0)); // false
console.log(isEmpty(false)); // false
console.log(isEmpty([1, 2, 3])); // false
console.log(isEmpty({ key: 'value' })); // false
