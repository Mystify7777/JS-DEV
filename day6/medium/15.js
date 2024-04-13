//This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruits = ['banana', 'orange', 'mango', 'lemon'];
const reversedFruits = [];

for (let i = fruits.length - 1; i >= 0; i--) {
    reversedFruits.push(fruits[i]);
}

console.log(reversedFruits); 