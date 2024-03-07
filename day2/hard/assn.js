//1
var sentence1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
var matches1 = sentence1.match(/\blove\b/gi);
var loveCount = matches1 ? matches1.length : 0;
console.log("Number of occurrences of 'love': " + loveCount);

//2
var sentence2 = 'You cannot end a sentence with because because because is a conjunction';
var matches2 = sentence2.match(/\bbecause\b/g);
var count = matches2 ? matches2.length : 0;
console.log("Number of occurrences of 'because': " + count);

//3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

const cleanedText = sentence.replace(/[^\w\s]/gi, '');
const words = cleanedText.split(/\s+/);
const wordCounts = {};
words.forEach(word => {
    word = word.toLowerCase();
    wordCounts[word] ? wordCounts[word]++ : wordCounts[word] = 1;
});
let mostFrequentWord = '';
let maxCount = 0;
for (const [word, count] of Object.entries(wordCounts)) {
    if (count > maxCount) {
        mostFrequentWord = word;
        maxCount = count;
    }
}
console.log("Most frequent word:", mostFrequentWord);

/*4
const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

// Extract numbers and their corresponding indicators (per month or annual)
const matches = text.matchAll(/(\d+) euro (?:from salary|annual bonus|online courses) (per month|annual)/g);

// Initialize variables for monthly and annual incomes
let totalMonthlyIncome = 0;
let totalAnnualIncome = 0;

// Iterate over each match
for (const match of matches) {
    const amount = parseInt(match[1]); // Extract the numeric amount
    const indicator = match[2]; // Extract the indicator (per month or annual)

    // Add the amount to the corresponding income total
    if (indicator === 'per month') {
        totalMonthlyIncome += amount;
    } else if (indicator === 'annual') {
        totalAnnualIncome += amount;
    }
}

// Calculate total annual income including monthly income
const totalIncome = totalAnnualIncome + (totalMonthlyIncome * 12);

console.log("Total annual income:", totalIncome);
console.log("Total monthly income:", totalMonthlyIncome);
console.log("Total annual income (excluding monthly):", totalAnnualIncome);
*/
/*4
const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

// Extract numbers and their corresponding indicators (per month or annual)
const matches = text.matchAll(/(\d+) euro (?:from salary|annual bonus|online courses) (?:per month|annual)/gi);

// Initialize variables for monthly and annual incomes
let totalMonthlyIncome = 0;
let totalAnnualIncome = 0;

// Iterate over each match
for (const match of matches) {
    const amount = parseInt(match[1]); // Extract the numeric amount
    const indicator = match[0].includes('per month') ? 'per month' : 'annual'; // Determine if it's per month or annual
    
    // Add the amount to the corresponding income total
    if (indicator === 'per month') {
        totalMonthlyIncome += amount;
    } else if (indicator === 'annual') {
        totalAnnualIncome += amount;
    }
}

// Calculate total annual income including monthly income
const totalIncome = totalAnnualIncome + (totalMonthlyIncome * 12);

console.log("Total annual income:", totalIncome);
console.log("Total monthly income:", totalMonthlyIncome);
console.log("Total annual income (excluding monthly):", totalAnnualIncome);
*/
/*4
const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

// Extract numbers and their corresponding indicators (per month or annual)
const matches = text.matchAll(/(\d+) euro (?:from salary|annual bonus|online courses)(?: per month)?(?:, |$)/gi);


// Initialize variables for monthly and annual incomes
let totalMonthlyIncome = 0;
let totalAnnualIncome = 0;

// Iterate over each match
for (const match of matches) {
    const amount = parseInt(match[1]); // Extract the numeric amount
    const description = match[0].split(' ')[3].toLowerCase(); // Extract the description
    
    // Add the amount to the corresponding income total
    if (description.includes('per month')) {
        totalMonthlyIncome += amount;
    } else {
        totalAnnualIncome += amount;
    }
}

// Calculate total annual income including monthly income
const totalIncome = totalAnnualIncome + (totalMonthlyIncome * 12);

console.log("Total annual income:", totalIncome);
console.log("Total monthly income:", totalMonthlyIncome);
console.log("Total annual income (excluding monthly):", totalAnnualIncome);
*/
//4
const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
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

