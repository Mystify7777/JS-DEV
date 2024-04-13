//6 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

//7 Print the array using console.log()
console.log(itCompanies);

//8 Print the number of companies in the array
console.log("Number of companies:", itCompanies.length);

//9 Print the first company, middle and last company
// Print the first company
console.log("First company:", itCompanies[0]);

// Calculate the index of the middle company
let middleIndex = Math.floor(itCompanies.length / 2);
// Print the middle company
console.log("Middle company:", itCompanies[middleIndex]);

// Print the last company
console.log("Last company:", itCompanies[itCompanies.length - 1]);

//10 Print out each company
itCompanies.forEach(company => {
    console.log(company);
});

//11 Change each company name to uppercase one by one and print them out
itCompanies.forEach(company => {
    let uppercaseCompany = company.toUpperCase();
    console.log(uppercaseCompany);
});

//12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let companiesSentence = itCompanies.join(", ");
console.log(companiesSentence + " are big IT companies.");

//13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let companyName = "Microsoft"; 
if (itCompanies.includes(companyName)) {
    console.log(companyName + " exists in the array.");
} else {
    console.log("Company not found.");
}

//14 Filter out companies which have more than one 'o' without the filter method
let companiesWithMoreThanOneO = [];

for (let i = 0; i < itCompanies.length; i++) {
    let company = itCompanies[i];
    let count = 0;

    for (let j = 0; j < company.length; j++) {
        if (company[j] === 'o' || company[j] === 'O') {
            count++;
        }
    }

    if (count > 1) {
        companiesWithMoreThanOneO.push(company);
    }
}

console.log("Companies with more than one 'o':", companiesWithMoreThanOneO);

//15 Sort the array using sort() method
itCompanies.sort();

console.log("Sorted array:", itCompanies);

//16 Reverse the array using reverse() method
itCompanies.reverse();

console.log("Reversed array:", itCompanies);

//17 Slice out the first 3 companies from the array
let firstThreeCompanies = itCompanies.slice(0, 3);

console.log("First three companies:", firstThreeCompanies);

//18 Slice out the last 3 companies from the array
let lastThreeCompanies = itCompanies.slice(-3);

console.log("Last three companies:", lastThreeCompanies);

//19 Slice out the middle IT company or companies from the array
let middleCompanies;

if (itCompanies.length % 2 === 0) {
    // If the length of the array is even, slice out two middle companies
    middleCompanies = itCompanies.slice(middleIndex - 1, middleIndex + 1);
} else {
    // If the length of the array is odd, slice out one middle company
    middleCompanies = [itCompanies[middleIndex]];
}

console.log("Middle IT company or companies:", middleCompanies);

//20 Remove the first IT company from the array
itCompanies.shift();

console.log("Array after removing the first IT company:", itCompanies);

//21 Remove the middle IT company or companies from the array

if (itCompanies.length % 2 === 0) {
    // If the length of the array is even, remove two middle companies
    itCompanies.splice(middleIndex - 1, 2);
} else {
    // If the length of the array is odd, remove one middle company
    itCompanies.splice(middleIndex, 1);
}

console.log("Array after removing the middle IT company or companies:", itCompanies);

//22 Remove the last IT company from the array
itCompanies.pop();

console.log("Array after removing the last IT company:", itCompanies);

//23 Remove all IT companies
itCompanies = [];

console.log("Array after removing all IT companies:", itCompanies);
