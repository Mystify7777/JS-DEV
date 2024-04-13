/*
Use the countries array to create the following array of arrays:
[
['Albania', 'ALB', 7],
['Bolivia', 'BOL', 7],
['Canada', 'CAN', 6],
['Denmark', 'DEN', 7],
['Ethiopia', 'ETH', 8],
['Finland', 'FIN', 7],
['Germany', 'GER', 7],
['Hungary', 'HUN', 7],
['Ireland', 'IRE', 7],
['Iceland', 'ICE', 7],
['Japan', 'JAP', 5],
['Kenya', 'KEN', 5] */
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
    'Iceland',
    'Japan',
    'Kenya'
];

const arrayofArrays = [];

for (let i = 0; i < countries.length; i++) {
    const countryName = countries[i];
    const abbreviation = countryName.slice(0, 3).toUpperCase();
    const nameLength = countryName.length;
    arrayofArrays.push([countryName, abbreviation, nameLength]);
}

console.log(arrayofArrays);
