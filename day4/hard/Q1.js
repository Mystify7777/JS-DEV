//Write a program which tells the number of days in a month.
// Function to determine the number of days in a month
function getDaysInMonth(month) {
    month = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();

    switch (month) {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            return `${month} has 31 days.`;
        case 'April':
        case 'June':
        case 'September':
        case 'November':
            return `${month} has 30 days.`;
        case 'February':
            return `${month} has 28 or 29 days.`;
        default:
            return 'Invalid month.';
    }
}

let userInput = prompt("Enter a month:");

let result = getDaysInMonth(userInput);
console.log(result);
