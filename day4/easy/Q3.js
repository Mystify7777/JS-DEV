/*If a is greater than b return 'a is greater than b' else 'a is less than b'.
Try to implement it in to ways
using if else
ternary operator */

//using if-else
function compareWithIfElse(a, b) {
    if (a > b) {
        return 'a is greater than b';
    } else {
        return 'a is less than or equal to b';
    }
}

console.log(compareWithIfElse(5, 3)); // Output: 'a is greater than b'
console.log(compareWithIfElse(3, 5)); // Output: 'a is less than or equal to b'

//using ternary operator
function compareWithTernary(a, b) {
    return a > b ? 'a is greater than b' : 'a is less than or equal to b';
}

console.log(compareWithTernary(5, 3)); // Output: 'a is greater than b'
console.log(compareWithTernary(3, 5)); // Output: 'a is less than or equal to b'

