/*6. Figure out the result of the following expressions first without using
console.log(). After you decide the result confirm it by using console.log()
1. 4 > 3 && 10 < 12
2. 4 > 3 && 10 > 12
3. 4 > 3 || 10 < 12
4. 4 > 3 || 10 > 12
5. !(4 > 3)
6. !(4 < 3)
7. !(false)
8. !(4 > 3 && 10 < 12)
9. !(4 > 3 && 10 > 12)
10. !(4 === '4')
11. There is no 'on' in both dragon and python*/
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4')); // true
console.log(!('dragon'.includes('on') && 'python'.includes('on'))); // false