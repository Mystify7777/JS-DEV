/*
In above countries array, check if there is a country or countries end with a
substring 'ia'. If there are countries end with, print it as array. If there is
no country containing the word 'ai', print 'These are countries ends without
ia'.
['Albania', 'Bolivia','Ethiopia'] */
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
];

const countriesEndsWithIa = [];

for (let i = 0; i < countries.length; i++) {
    if (countries[i].endsWith('ia')) {
        countriesEndsWithIa.push(countries[i]);
    }
}

if (countriesEndsWithIa.length > 0) {
    console.log(countriesEndsWithIa);
} else {
    console.log("These are countries ends without ia");
}
