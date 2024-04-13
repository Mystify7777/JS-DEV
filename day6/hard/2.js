/*
Arrays are mutable. Create a copy of array which does not modify the original.
Sort the copied array and store in a variable sortedCountries
*/
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
    ]
const copiedCountries = [...countries];

const sortedCountries = copiedCountries.sort();

console.log(sortedCountries);