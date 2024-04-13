//Copy countries array(Avoid mutation)
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
    ]
//using the spread operator:
const countriesCopy1 = [...countries];
//using Array.from():
const countriesCopy2 = Array.from(countries);
//using the slice() method:
const countriesCopy3 = countries.slice();
