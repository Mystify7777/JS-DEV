/*Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */
function assignGrade(score) {
    if (score >= 80 && score <= 100) {
        return 'A';
    } else if (score >= 70 && score <= 79) {
        return 'B';
    } else if (score >= 60 && score <= 69) {
        return 'C';
    } else if (score >= 50 && score <= 59) {
        return 'D';
    } else if (score >= 0 && score <= 49) {
        return 'F';
    } else {
        return 'Invalid score';
    }
}

console.log("Score: 95, Grade:", assignGrade(95)); // Output: A
console.log("Score: 75, Grade:", assignGrade(75)); // Output: B
console.log("Score: 65, Grade:", assignGrade(65)); // Output: C
console.log("Score: 55, Grade:", assignGrade(55)); // Output: D
console.log("Score: 35, Grade:", assignGrade(35)); // Output: F
