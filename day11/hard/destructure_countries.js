/*
1. Destructure the countries object print name, capital, population and languages of all countries
*/

const countries = [
    {
      name: 'Afghanistan',
      capital: 'Kabul',
      population: 27657145,
      languages: ['Pashto', 'Uzbek', 'Turkmen']
    },
    {
      name: 'Albania',
      capital: 'Tirana',
      population: 2886026,
      languages: ['Albanian']
    },
    {
      name: 'Algeria',
      capital: 'Algiers',
      population: 40400000,
      languages: ['Arabic', 'Berber']
    },
    {
      name: 'Angola',
      capital: 'Luanda',
      population: 25868000,
      languages: ['Portuguese']
    },
    {
      name: 'Argentina',
      capital: 'Buenos Aires',
      population: 43590400,
      languages: ['Spanish']
    },
    {
      name: 'Australia',
      capital: 'Canberra',
      population: 24117360,
      languages: ['English']
    },
    {
      name: 'Austria',
      capital: 'Vienna',
      population: 8725931,
      languages: ['German']
    },
    {
      name: 'Bangladesh',
      capital: 'Dhaka',
      population: 161006790,
      languages: ['Bengali']
    },
    {
      name: 'Brazil',
      capital: 'Brasília',
      population: 206135893,
      languages: ['Portuguese']
    },
    {
      name: 'Canada',
      capital: 'Ottawa',
      population: 36155487,
      languages: ['English', 'French']
    },
    {
      name: 'China',
      capital: 'Beijing',
      population: 1377422166,
      languages: ['Mandarin']
    },
    {
      name: 'Egypt',
      capital: 'Cairo',
      population: 91205000,
      languages: ['Arabic']
    },
    {
      name: 'France',
      capital: 'Paris',
      population: 66710000,
      languages: ['French']
    },
    {
      name: 'Germany',
      capital: 'Berlin',
      population: 81770900,
      languages: ['German']
    },
    {
      name: 'India',
      capital: 'New Delhi',
      population: 1295210000,
      languages: ['Hindi', 'English']
    },
    {
      name: 'Indonesia',
      capital: 'Jakarta',
      population: 258705000,
      languages: ['Indonesian']
    },
    {
      name: 'Italy',
      capital: 'Rome',
      population: 60665551,
      languages: ['Italian']
    },
    {
      name: 'Japan',
      capital: 'Tokyo',
      population: 126960000,
      languages: ['Japanese']
    },
    {
      name: 'Mexico',
      capital: 'Mexico City',
      population: 122273473,
      languages: ['Spanish']
    },
    {
      name: 'Netherlands',
      capital: 'Amsterdam',
      population: 17019800,
      languages: ['Dutch']
    },
    {
      name: 'Nigeria',
      capital: 'Abuja',
      population: 186988000,
      languages: ['English']
    },
    {
      name: 'Pakistan',
      capital: 'Islamabad',
      population: 194125062,
      languages: ['Urdu', 'English']
    },
    {
      name: 'Russia',
      capital: 'Moscow',
      population: 146599183,
      languages: ['Russian']
    },
    {
      name: 'Saudi Arabia',
      capital: 'Riyadh',
      population: 32248200,
      languages: ['Arabic']
    },
    {
      name: 'South Africa',
      capital: 'Pretoria',
      population: 55653654,
      languages: ['Zulu', 'Xhosa', 'Afrikaans', 'English']
    },
    {
      name: 'South Korea',
      capital: 'Seoul',
      population: 50801405,
      languages: ['Korean']
    },
    {
      name: 'Spain',
      capital: 'Madrid',
      population: 46423064,
      languages: ['Spanish']
    },
    {
      name: 'Turkey',
      capital: 'Ankara',
      population: 78741053,
      languages: ['Turkish']
    },
    {
      name: 'United Kingdom',
      capital: 'London',
      population: 65110000,
      languages: ['English']
    },
    {
      name: 'United States',
      capital: 'Washington, D.C.',
      population: 323947000,
      languages: ['English']
    }
  ];
  

for (const { name, capital, population, languages } of countries) {
    console.log(`Name: ${name}`);
    console.log(`Capital: ${capital}`);
    console.log(`Population: ${population}`);
    console.log(`Languages: ${languages.join(', ')}`);
    console.log('------------------------');
  }