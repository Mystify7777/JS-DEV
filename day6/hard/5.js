//Find the country containing the hightest number of characters in the countries array
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

const longestCountry = countries.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
}, '');

console.log("Country with the highest number of characters:", longestCountry);
