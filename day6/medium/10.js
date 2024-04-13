//Using the above countries array, find the country containing only 5 characters.
//['Japan', 'Kenya']
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

const countriesWithFiveCharacters = [];

for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === 5) {
        countriesWithFiveCharacters.push(countries[i]);
    }
}

console.log("Countries with exactly 5 characters:", countriesWithFiveCharacters);
