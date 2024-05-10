//7. Use the countries object to print a country name, capital, populations and languages.
const countries = {
    India: {
        capital: 'New Delhi',
        population: 1400154207,
        languages: ['Hindi', 'English']
    },
    Pakistan: {
        capital: 'Islamabad',
        population: 225199937,
        languages: ['Urdu', 'English']
    },
    UK: {
        capital: 'London',
        population: 67886011,
        languages: ['English']
    },
    USA: {
        capital: 'Washington, D.C.',
        population: 331002651,
        languages: ['English']
    },
    Canada: {
        capital: 'Ottawa',
        population: 37742154,
        languages: ['English', 'French']
    },
    Japan: {
        capital: 'Tokyo',
        population: 126476461,
        languages: ['Japanese']
    }
};

for (const country in countries) {
    console.log(`${country} - Capital: ${countries[country].capital}, Population: ${countries[country].population}, Languages: ${countries[country].languages.join(', ')}`);
}


