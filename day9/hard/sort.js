const countries = [
    { name: 'Finland', capital: 'Helsinki', population: 5536146, languages: ['Finnish', 'Swedish'] },
    { name: 'Sweden', capital: 'Stockholm', population: 10353442, languages: ['Swedish'] },
    { name: 'Denmark', capital: 'Copenhagen', population: 5831404, languages: ['Danish'] },
    { name: 'Norway', capital: 'Oslo', population: 5421241, languages: ['Norwegian'] },
    { name: 'Iceland', capital: 'Reykjavik', population: 366425, languages: ['Icelandic'] },
    { name: 'Estonia', capital: 'Tallinn', population: 1328976, languages: ['Estonian'] },
    { name: 'Latvia', capital: 'Riga', population: 1869223, languages: ['Latvian'] },
    { name: 'Lithuania', capital: 'Vilnius', population: 2793471, languages: ['Lithuanian'] },
    { name: 'Russia', capital: 'Moscow', population: 145912025, languages: ['Russian'] },
    { name: 'Poland', capital: 'Warsaw', population: 38386000, languages: ['Polish'] },
    { name: 'Germany', capital: 'Berlin', population: 83166711, languages: ['German'] },
    { name: 'France', capital: 'Paris', population: 67081000, languages: ['French'] },
    { name: 'Spain', capital: 'Madrid', population: 47329000, languages: ['Spanish'] },
    { name: 'Portugal', capital: 'Lisbon', population: 10295909, languages: ['Portuguese'] },
    { name: 'Italy', capital: 'Rome', population: 59554023, languages: ['Italian'] },
    { name: 'Greece', capital: 'Athens', population: 10715549, languages: ['Greek'] },
    { name: 'Turkey', capital: 'Ankara', population: 85042730, languages: ['Turkish'] },
    { name: 'Netherlands', capital: 'Amsterdam', population: 17441139, languages: ['Dutch'] },
    { name: 'Belgium', capital: 'Brussels', population: 11589623, languages: ['Dutch', 'French', 'German'] },
    { name: 'Switzerland', capital: 'Bern', population: 8715500, languages: ['German', 'French', 'Italian', 'Romansh'] }
  ];
  
  
//1. Use the countries information, in the data folder. Sort countries by name, by capital, by population


const sortCountries = (key) => {
  return [...countries].sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
};

// Sort countries by name
const countriesByName = sortCountries('name');
console.log('Countries sorted by name:');
console.log(countriesByName);

// Sort countries by capital
const countriesByCapital = sortCountries('capital');
console.log('\nCountries sorted by capital:');
console.log(countriesByCapital);

// Sort countries by population
const countriesByPopulation = sortCountries('population');
console.log('\nCountries sorted by population:');
console.log(countriesByPopulation);


//2. Find the 10 most spoken languages:

const mostSpokenLanguages = (countries, topN) => {
    const languageCounts = countries.reduce((acc, country) => {
      country.languages.forEach(language => {
        if (!acc[language]) {
          acc[language] = 0;
        }
        acc[language]++;
      });
      return acc;
    }, {});
  
    const sortedLanguages = Object.keys(languageCounts)
      .map(language => ({ language, count: languageCounts[language] }))
      .sort((a, b) => b.count - a.count);
  
    return sortedLanguages.slice(0, topN);
  };
  
  console.log('10 most spoken languages:');
  console.log(mostSpokenLanguages(countries, 10));
  
  console.log('\n3 most spoken languages:');
  console.log(mostSpokenLanguages(countries, 3));


//3 Use countries_data.js file create a function which create the ten most populated countries


const mostPopulatedCountries = (countries, topN) => {
  return countries
    .sort((a, b) => b.population - a.population)
    .slice(0, topN)
    .map(country => ({ country: country.name, population: country.population }));
};

console.log('10 most populated countries:');
console.log(mostPopulatedCountries(countries, 10));

console.log('\n3 most populated countries:');
console.log(mostPopulatedCountries(countries, 3));
