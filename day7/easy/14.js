//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
    // Convert month to lowercase for case-insensitive comparison
    const lowerCaseMonth = month.toLowerCase();
    
    // Check the season based on the month
    if (lowerCaseMonth === "december" || lowerCaseMonth === "january" || lowerCaseMonth === "february") {
        return "Winter";
    } else if (lowerCaseMonth === "march" || lowerCaseMonth === "april" || lowerCaseMonth === "may") {
        return "Spring";
    } else if (lowerCaseMonth === "june" || lowerCaseMonth === "july" || lowerCaseMonth === "august") {
        return "Summer";
    } else if (lowerCaseMonth === "september" || lowerCaseMonth === "october" || lowerCaseMonth === "november") {
        return "Autumn";
    } else {
        return "Invalid month";
    }
}

const month = "March"; 
const season = checkSeason(month);
console.log("Season:", season); 