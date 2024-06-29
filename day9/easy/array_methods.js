/*
1. Explain the difference between forEach, map, filter, and reduce.
2. Define a callback function before you use it in forEach, map, filter or reduce.
3. Use forEach to console.log each country in the countries array.
4. Use forEach to console.log each name in the names array.
5. Use forEach to console.log each number in the numbers array.
6. Use map to create a new array by changing each country to uppercase in the
countries array.
7. Use map to create an array of countries length from countries array.
8. Use map to create a new array by changing each number to square in the numbers
array
9. Use map to change to each name to uppercase in the names array
10. Use map to map the products array to its corresponding prices.
11. Use filter to filter out countries containing land.
12. Use filter to filter out countries having six character.
13. Use filter to filter out countries containing six letters and more in the
country array.
14. Use filter to filter out country start with 'E';
15. Use filter to filter out only prices with values.
16. Declare a function called getStringLists which takes an array as a parameter
and then returns an array only with string items.
17. Use reduce to sum all the numbers in the numbers array.
18. Use reduce to concatenate all the countries and to produce this sentence:
Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European
countries
19. Explain the difference between some and every
20. Use some to check if some names' length greater than seven in names array
21. Use every to check if all the countries contain the word land
22. Explain the difference between find and findIndex.
23. Use find to find the first country containing only six letters in the countries
array
24. Use findIndex to find the position of the first country containing only six
letters in the countries array
25. Use findIndex to find the position of Norway if it doesn't exist in the array
you will get -1.
26. Use findIndex to find the position of Russia if it doesn't exist in the array
you will get -1.
*/

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias','Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
{ product: 'banana', price: 3 },
{ product: 'mango', price: 6 },
{ product: 'potato', price: ' ' },
{ product: 'avocado', price: 8 },
{ product: 'coffee', price: 10 },
{ product: 'tea', price: '' },
]

//1. Explain the difference between forEach, map, filter, and reduce.

/*
>>>  forEach:  Iterate over each element to perform side effects, does not return a new array.
>>>  map:      Transform each element, returns a new array of the same length.
>>>  filter:   Select elements that pass a condition, returns a new array with the same or fewer elements.
>>>  reduce:   Aggregate array elements into a single value based on a reducer function.
*/

//2. Define a callback function before you use it in forEach, map, filter or reduce.

const logElement = (element) => console.log(element);
const toUpperCase = (str) => str.toUpperCase();
const getLength = (str) => str.length;
const square = (num) => num * num;
const getPrice = (product) => product.price;

//3. Use forEach to console.log each country in the countries array

countries.forEach(logElement);

//4. Use forEach to console.log each name in the names array

names.forEach(logElement);

//5. Use forEach to console.log each number in the numbers array

numbers.forEach(logElement);

//6. Use map to create a new array by changing each country to uppercase

const upperCaseCountries = countries.map(toUpperCase);

console.log(upperCaseCountries);

//7. Use map to create an array of countries length from countries array

const countriesLength = countries.map(getLength);

console.log(countriesLength);

//8. Use map to create a new array by changing each number to square

const squaredNumbers = numbers.map(square);

console.log(squaredNumbers);

//9. Use map to change each name to uppercase in the names array

const upperCaseNames = names.map(toUpperCase);

console.log(upperCaseNames);

//10. Use map to map the products array to its corresponding prices

const productPrices = products.map(getPrice);

console.log(productPrices);

//11. Use filter to filter out countries containing land.

const countriesContainingLand = countries.filter(country => country.includes('land'));

console.log(countriesContainingLand);

//12. Use filter to filter out countries having six character.

const sixCharacterCountries = countries.filter(country => country.length === 6);

console.log(sixCharacterCountries);

//13. Use filter to filter out countries containing six letters and more in the country array.

const sixOrMoreCharacterCountries = countries.filter(country => country.length >= 6);

console.log(sixOrMoreCharacterCountries);

//14. Use filter to filter out country start with 'E';

const countriesStartingWithE = countries.filter(country => country.startsWith('E'));

console.log(countriesStartingWithE);

//15. Use filter to filter out only prices with values.

const validPrices = products.filter(product => typeof product.price === 'number' && !isNaN(product.price) && product.price !== '');

console.log(validPrices);

//16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

const getStringLists = (arr) => arr.filter(item => typeof item === 'string');

console.log(getStringLists(['hello', 123, 'world', true, 'JavaScript']));

//17. Use reduce to sum all the numbers in the numbers array.

const sumOfNumbers = numbers.reduce((acc, num) => acc + num, 0);

console.log(sumOfNumbers);

//18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

const moreCountries = ['Estonia', ...countries];

const sentence = moreCountries.reduce((acc, country, index) => {
  if (index === 0) {
    return country;
  } else if (index === moreCountries.length - 1) {
    return `${acc}, and ${country}`;
  } else {
    return `${acc}, ${country}`;
  }
}, '') + ' are north European countries';

console.log(sentence);

//19. Explain the difference between some and every

/*
>>> some: This method checks if at least one element in the array passes the test implemented by the provided function. It returns true if at least one element passes the test; otherwise, it returns false.

>>> every: This method checks if all elements in the array pass the test implemented by the provided function. It returns true if all elements pass the test; otherwise, it returns false.
*/

//20. Use some to check if some names' length greater than seven in names array

const someNamesGreaterThanSeven = names.some(name => name.length > 7);

console.log(someNamesGreaterThanSeven); 

//21. Use every to check if all the countries contain the word land

const allCountriesContainLand = countries.every(country => country.includes('land'));

console.log(allCountriesContainLand); 

//22. Explain the difference between find and findIndex.

/*
>>> find: This method returns the value of the first element in the array that satisfies the provided testing function. If no elements satisfy the testing function, it returns undefined.

>>> findIndex: This method returns the index of the first element in the array that satisfies the provided testing function. If no elements satisfy the testing function, it returns -1.
*/

//23. Use find to find the first country containing only six letters in the countries array

const firstSixLetterCountry = countries.find(country => country.length === 6);

console.log(firstSixLetterCountry); 

//24. Use findIndex to find the position of the first country containing only six letters in the countries array

const firstSixLetterCountryIndex = countries.findIndex(country => country.length === 6);

console.log(firstSixLetterCountryIndex); 

//25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

const norwayIndex = countries.findIndex(country => country === 'Norway');

console.log(norwayIndex);

//26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

const russiaIndex = countries.findIndex(country => country === 'Russia');

console.log(russiaIndex);
