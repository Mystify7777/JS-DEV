/*
Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05 */

let now = new Date();

let year = now.getFullYear();
let month = String(now.getMonth() + 1).padStart(2, '0');
let day = String(now.getDate()).padStart(2, '0');
let hours = String(now.getHours()).padStart(2, '0');
let minutes = String(now.getMinutes()).padStart(2, '0');

/*
The padStart() method is used to pad a string with another string until the resulting string reaches the desired length.

In the context of the code provided, String(now.getMonth() + 1).padStart(2, '0') is used to ensure that the month value always has two digits.
*/


let format = `${year}-${month}-${day} ${hours}:${minutes}`;

console.log("YYYY-MM-DD HH:mm:", format);
