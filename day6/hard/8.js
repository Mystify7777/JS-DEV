//Extract all the countries containing two or more words from the countries array and print it as array
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

const countriesWithTwoOrMoreWords = countries.filter(country => country.includes(' '));

console.log(countriesWithTwoOrMoreWords);

