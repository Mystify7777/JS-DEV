//Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x, y) {
    const temp = x;
    x = y;
    y = temp;
    return [x, y];
}

let a = 5;
let b = 10;
console.log("Before swapping: a =", a, ", b =", b);
[a, b] = swapValues(a, b);
console.log("After swapping: a =", a, ", b =", b);
