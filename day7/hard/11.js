//Call your function sum, it takes any number of arguments and it returns the sum.
function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7)); // 22
console.log(sum(10)); // 10
console.log(sum()); // 0
