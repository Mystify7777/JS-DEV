//Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
function reverseCountries(countries) {
    const copy = countries.slice();
    return copy.reverse();
}

const countries = [
    'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia',
    'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'
];
console.log(reverseCountries(countries)); 
