/*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */

function getSeason(month) {
    if (month === 'September' || month === 'October' || month === 'November') {
        return 'Autumn';
    } else if (month === 'December' || month === 'January' || month === 'February') {
        return 'Winter';
    } else if (month === 'March' || month === 'April' || month === 'May') {
        return 'Spring';
    } else if (month === 'June' || month === 'July' || month === 'August') {
        return 'Summer';
    } else {
        return 'Invalid month';
    }
}

let userInput = prompt("Enter a month:");

let month = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

console.log(`In ${month}, the season is ${getSeason(month)}.`);
