const countries = [
    {
      name: 'Afghanistan',
      languages: ['Pashto', 'Uzbek', 'Turkmen']
    },
    {
      name: 'Albania',
      languages: ['Albanian']
    },
    {
      name: 'Algeria',
      languages: ['Arabic', 'Berber']
    },
    {
      name: 'Angola',
      languages: ['Portuguese']
    },
    {
      name: 'Argentina',
      languages: ['Spanish']
    },
    {
      name: 'Australia',
      languages: ['English']
    },
    {
      name: 'Austria',
      languages: ['German']
    },
    {
      name: 'Bangladesh',
      languages: ['Bengali']
    },
    {
      name: 'Brazil',
      languages: ['Portuguese']
    },
    {
      name: 'Canada',
      languages: ['English', 'French']
    },
    {
      name: 'China',
      languages: ['Mandarin']
    },
    {
      name: 'Egypt',
      languages: ['Arabic']
    },
    {
      name: 'France',
      languages: ['French']
    },
    {
      name: 'Germany',
      languages: ['German']
    },
    {
      name: 'India',
      languages: ['Hindi', 'English']
    },
    {
      name: 'Indonesia',
      languages: ['Indonesian']
    },
    {
      name: 'Italy',
      languages: ['Italian']
    },
    {
      name: 'Japan',
      languages: ['Japanese']
    },
    {
      name: 'Mexico',
      languages: ['Spanish']
    },
    {
      name: 'Netherlands',
      languages: ['Dutch']
    },
    {
      name: 'Nigeria',
      languages: ['English']
    },
    {
      name: 'Pakistan',
      languages: ['Urdu', 'English']
    },
    {
      name: 'Russia',
      languages: ['Russian']
    },
    {
      name: 'Saudi Arabia',
      languages: ['Arabic']
    },
    {
      name: 'South Africa',
      languages: ['Zulu', 'Xhosa', 'Afrikaans', 'English']
    },
    {
      name: 'South Korea',
      languages: ['Korean']
    },
    {
      name: 'Spain',
      languages: ['Spanish']
    },
    {
      name: 'Turkey',
      languages: ['Turkish']
    },
    {
      name: 'United Kingdom',
      languages: ['English']
    },
    {
      name: 'United States',
      languages: ['English']
    }
  ];
  
//1. Unique languages 

const countLanguages = (countries) => {
  const languageSet = new Set();
  
  countries.forEach(country => {
    country.languages.forEach(language => {
      languageSet.add(language);
    });
  });

  return languageSet.size;
};


console.log('Number of unique languages:', countLanguages(countries));


//2. Most spoken languages

const getMostSpokenLanguages = (countries, topN) => {
  const languageCount = {};

  countries.forEach(country => {
    country.languages.forEach(language => {
      if (languageCount[language]) {
        languageCount[language]++;
      } else {
        languageCount[language] = 1;
      }
    });
  });

  const sortedLanguages = Object.entries(languageCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)
    .map(language => ({ language: language[0], count: language[1] }));

  return sortedLanguages;
};

console.log('10 Most Spoken Languages:', getMostSpokenLanguages(countries, 10));
