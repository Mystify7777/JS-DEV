const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];


// 1. Find the total price of products by chaining array iterators
const totalChained = products
  .map(product => ({ ...product, price: parseFloat(product.price) || 0 }))
  .filter(product => product.price > 0)
  .reduce((sum, product) => sum + product.price, 0);

console.log('Total price (chained):', totalChained);


// 2. Find the sum of price of products using only reduce
const totalReduced = products.reduce((sum, product) => {
  const price = parseFloat(product.price) || 0;
  return sum + price;
}, 0);

console.log('Total price (reduced):', totalReduced); 


// Function to add more countries to the array
const addCountries = (newCountries) => {
    countries.push(...newCountries);
  };
  
  addCountries(['Estonia', 'Latvia', 'Lithuania', 'Afghanistan', 'Albania', 'Algeria', 'Angola', 'Argentina',
  'Australia', 'Austria', 'Bangladesh', 'Brazil', 'Canada',
  'China', 'Egypt', 'France', 'Germany', 'India',
  'Indonesia', 'Italy', 'Japan', 'Mexico', 'Netherlands',
  'Nigeria', 'Pakistan', 'Russia', 'Saudi Arabia', 'South Africa',
  'South Korea', 'Spain', 'Turkey', 'United Kingdom', 'United States']);
console.log('Updated countries:', countries); 


// 3. Declare a function called categorizeCountries
const categorizeCountries = (pattern) => {
  return countries.filter(country => country.toLowerCase().includes(pattern.toLowerCase()));
};

console.log('Categorized countries:', categorizeCountries('land'));



// 4. Create a function which returns an array of objects with letter counts of initials
const letterCount = (arr) => {
  const counts = arr.reduce((acc, country) => {
    const firstLetter = country[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = 0;
    }
    acc[firstLetter]++;
    return acc;
  }, {});
  
  return Object.keys(counts).map(letter => ({ letter, count: counts[letter] }));
};

console.log('Letter counts:', letterCount(countries)); 

// 5. Declare a getFirstTenCountries function
const getFirstTenCountries = (arr) => {
  return arr.slice(0, 10);
};

console.log('First ten countries:', getFirstTenCountries(countries)); 

// 6. Declare a getLastTenCountries function
const getLastTenCountries = (arr) => {
  return arr.slice(-10);
};

console.log('Last ten countries:', getLastTenCountries(countries));

// 7. Find out which letter is used most frequently as an initial for a country name
const mostFrequentInitial = (arr) => {
  const letterCounts = arr.reduce((acc, country) => {
    const firstLetter = country[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = 0;
    }
    acc[firstLetter]++;
    return acc;
  }, {});

  return Object.keys(letterCounts).reduce((a, b) => letterCounts[a] > letterCounts[b] ? a : b);
};

console.log('Most frequent initial:', mostFrequentInitial(countries)); 

