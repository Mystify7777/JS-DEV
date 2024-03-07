/*Calculate the total annual income of the person by extracting the numbers from
the following text. 'He earns 5000 euro from salary per month, 10000 euro
annual bonus, 15000 euro online courses per month.' */

const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

// Regular expressions to match monthly and annual incomes separately
// It's better to extract monthly and annual separately
// It might be possible in one line but I am too lazy to find that.

const monthlyRegex = /(\d+) euro (?:from salary|online courses) per month/gi;
const annualRegex = /(\d+) euro annual bonus/gi;

let totalMonthlyIncome = 0;
let totalAnnualIncome = 0;

let match;
while ((match = monthlyRegex.exec(text)) !== null) {
    totalMonthlyIncome += parseInt(match[1]);
}

while ((match = annualRegex.exec(text)) !== null) {
    totalAnnualIncome += parseInt(match[1]);
}

const totalIncome = totalAnnualIncome + (totalMonthlyIncome * 12);

console.log("Total annual income:", totalIncome);
console.log("Total monthly income:", totalMonthlyIncome);
console.log("Total annual income (excluding monthly):", totalAnnualIncome);
