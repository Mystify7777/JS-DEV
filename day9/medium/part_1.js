//1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
    ];

    const totalPrice = products
  .map(product => {
    
    const price = parseFloat(product.price);
    return isNaN(price) ? 0 : price;
  })
  .reduce((acc, price) => acc + price, 0);

console.log(totalPrice);


//2. Find the sum of price of products using only reduce reduce(callback))
const totalPriceReduce = products.reduce((acc, product) => {
    const price = parseFloat(product.price);
    return acc + (isNaN(price) ? 0 : price);
  }, 0);
  
console.log(totalPriceReduce);


//3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern

  const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Australia', 'Pakistan', 'India', 'Iceland'];

const categorizeCountries = (pattern) => {
  return countries.filter(country => country.toLowerCase().includes(pattern.toLowerCase()));
};

console.log(categorizeCountries('land')); 
console.log(categorizeCountries('ia')); 
console.log(categorizeCountries('ice'));
console.log(categorizeCountries('island'));  
console.log(categorizeCountries('stan')); 
