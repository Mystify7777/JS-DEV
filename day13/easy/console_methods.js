/*
1. Display the countries array as a table
2. Display the countries object as a table
3. Use console.group() to group logs 
*/
const countriesArray = [
    'Finland',
    'Estonia',
    'Sweden',
    'Denmark',
    'Norway',
    'Germany',
    'France',
    'Spain',
    'Italy',
    'Portugal'
  ];
  
  console.table(countriesArray);
  
  const countries = {
    Finland: {
      capital: 'Helsinki',
      population: 5540720,
      language: 'Finnish',
      currency: 'Euro'
    },
    Estonia: {
      capital: 'Tallinn',
      population: 1326535,
      language: 'Estonian',
      currency: 'Euro'
    },
    Sweden: {
      capital: 'Stockholm',
      population: 10353442,
      language: 'Swedish',
      currency: 'Swedish Krona'
    },
    Denmark: {
      capital: 'Copenhagen',
      population: 5822763,
      language: 'Danish',
      currency: 'Danish Krone'
    },
    Norway: {
      capital: 'Oslo',
      population: 5421241,
      language: 'Norwegian',
      currency: 'Norwegian Krone'
    },
    Germany: {
      capital: 'Berlin',
      population: 83783942,
      language: 'German',
      currency: 'Euro'
    },
    France: {
      capital: 'Paris',
      population: 65273511,
      language: 'French',
      currency: 'Euro'
    },
    Spain: {
      capital: 'Madrid',
      population: 46719142,
      language: 'Spanish',
      currency: 'Euro'
    },
    Italy: {
      capital: 'Rome',
      population: 60461826,
      language: 'Italian',
      currency: 'Euro'
    },
    Portugal: {
      capital: 'Lisbon',
      population: 10196709,
      language: 'Portuguese',
      currency: 'Euro'
    }
  };
  
  console.table(countries);

  
//   console.log(countries);
//   console.log(countriesArray);

  console.group('Countries Array');
  console.log(countriesArray);
  console.groupEnd();

  console.group('Countries Object');
  console.log(countries);
  console.groupEnd();

console.group('Countries Information');
Object.entries(countries).forEach(([country, details]) => {
  console.group(country);
  console.log(`Capital: ${details.capital}`);
  console.log(`Population: ${details.population}`);
  console.log(`Language: ${details.language}`);
  console.log(`Currency: ${details.currency}`);
  console.groupEnd();
});
console.groupEnd();
 