//Find the middle country(ies) in the countries array

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

   

let middleCountries = [];

if (countries.length % 2 === 0) {
   
    const middleIndex1 = countries.length / 2 - 1;
    const middleIndex2 = countries.length / 2;
    middleCountries.push(countries[middleIndex1], countries[middleIndex2]);
} else {
    
    const middleIndex = Math.floor(countries.length / 2);
    middleCountries.push(countries[middleIndex]);
}

console.log("Middle country or countries:", middleCountries);
