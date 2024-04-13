//Extract all the countries contain the word 'land' from the countries array and print it as array
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
];

const countriesWithLand = countries.filter(country => country.includes('land'));

console.log(countriesWithLand);
