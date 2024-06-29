const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

// 1. Find a union b
const union = [...new Set([...a, ...b])];
console.log('Union:', union);

// 2. Find a intersection b
const intersection = a.filter(num => b.includes(num));
console.log('Intersection:', intersection);

// 3. Find a with b (difference a - b)
const difference = a.filter(num => !b.includes(num));
console.log('Difference (a - b):', difference);
