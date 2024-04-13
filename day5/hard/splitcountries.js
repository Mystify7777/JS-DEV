//Divide the countries array into two equal arrays if it is even. If countries
//array is not even , one more country for the first half.

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


let firstHalfCountries, secondHalfCountries;

if (countries.length % 2 === 0) {
    // Array has an even number of elements
    const middleIndex = countries.length / 2;
    firstHalfCountries = countries.slice(0, middleIndex);
    secondHalfCountries = countries.slice(middleIndex);
} else {
    // Array has an odd number of elements
    const middleIndex = Math.ceil(countries.length / 2);
    firstHalfCountries = countries.slice(0, middleIndex);
    secondHalfCountries = countries.slice(middleIndex);
}

console.log("First half countries:", firstHalfCountries);
console.log("Second half countries:", secondHalfCountries);
