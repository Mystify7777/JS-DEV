//Write a program which tells the number of days in a month, now consider leap year.
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getDaysInMonth(month, year) {
    month = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();

    switch (month) {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            return `${month} ${year} has 31 days.`;
        case 'April':
        case 'June':
        case 'September':
        case 'November':
            return `${month} ${year} has 30 days.`;
        case 'February':
            if (isLeapYear(year)) {
                return `${month} ${year} has 29 days.`;
            } else {
                return `${month} ${year} has 28 days.`;
            }
        default:
            return 'Invalid month.';
    }
}

let userInputMonth = prompt("Enter a month:");
let userInputYear = prompt("Enter a year:");

let year = parseInt(userInputYear);

let result = getDaysInMonth(userInputMonth, year);
console.log(result);
