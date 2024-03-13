/*Use the Date object to do the following activities
1. What is the year today?
2. What is the month today as a number?
3. What is the date today?
4. What is the day today as a number?
5. What is the hours now?
6. What is the minutes now?
7. Find out the numbers of seconds elapsed from January 1, 1970 to now. */



const now = new Date();

// 1. What is the year today?
const year = now.getFullYear();

// 2. What is the month today as a number? (Note: January is 0, February is 1, and so on...)
const month = now.getMonth() + 1;

// 3. What is the date today?
const date = now.getDate();

// 4. What is the day today as a number? (Note: Sunday is 0, Monday is 1, and so on...)
const day = now.getDay();

// 5. What is the hours now?
const hours = now.getHours();

// 6. What is the minutes now?
const minutes = now.getMinutes();

// 7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
const secondsElapsed = Math.floor(now.getTime() / 1000);

// Display the results
console.log("1. Year today:", year);
console.log("2. Month today:", month);
console.log("3. Date today:", date);
console.log("4. Day today:", day);
console.log("5. Hours now:", hours);
console.log("6. Minutes now:", minutes);
console.log("7. Seconds elapsed since January 1, 1970:", secondsElapsed);
