// 1. Create an empty set
const emptySet = new Set();
console.log('Empty Set:', emptySet);

// 2. Create a set containing 0 to 10 using loop
const numberSet = new Set();
for (let i = 0; i <= 10; i++) {
  numberSet.add(i);
}
console.log('Set with numbers from 0 to 10:', numberSet);

// 3. Remove an element from a set
numberSet.delete(5);
console.log('Set after removing element 5:', numberSet);

// 4. Clear a set
numberSet.clear();
console.log('Set after clearing all elements:', numberSet);

// 5. Create a set of 5 string elements from an array
const stringArray = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const stringSet = new Set(stringArray);
console.log('Set of 5 string elements:', stringSet);

// 6. Create a map of countries and number of characters in each country's name
const countries = [
  'Afghanistan', 'Albania', 'Algeria', 'Angola', 'Argentina',
  'Australia', 'Austria', 'Bangladesh', 'Brazil', 'Canada',
  'China', 'Egypt', 'France', 'Germany', 'India',
  'Indonesia', 'Italy', 'Japan', 'Mexico', 'Netherlands',
  'Nigeria', 'Pakistan', 'Russia', 'Saudi Arabia', 'South Africa',
  'South Korea', 'Spain', 'Turkey', 'United Kingdom', 'United States'
];

const countryCharMap = new Map();
countries.forEach(country => {
  countryCharMap.set(country, country.length);
});
console.log('Map of countries and number of characters in each country\'s name:', countryCharMap);
