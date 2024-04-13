//Reverse the countries array and capitalize each country and stored it as an array
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

const reversedAndCapitalizedCountries = countries.reverse().map(country => country.toUpperCase());

console.log(reversedAndCapitalizedCountries);
