//Extract all the countries containing only four characters from the countries array and print it as array

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

const countriesWithFourChars = countries.filter(country => country.length === 4);

console.log(countriesWithFourChars);
