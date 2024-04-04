//Check if a day is weekend day or a working day. Your script will take day as an input.
function checkDay(day) {
    day = day.toLowerCase();

    if (day === 'saturday' || day === 'sunday') {
        return `${day.charAt(0).toUpperCase() + day.slice(1)} is a weekend.`;
    } else {
        return `${day.charAt(0).toUpperCase() + day.slice(1)} is a working day.`;
    }
}

let userInput = prompt("What is the day today?");

let result = checkDay(userInput);
console.log(result);
