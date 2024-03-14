/*Create a human readable time format using the Date time object
1. YYYY-MM-DD HH:mm
2. DD-MM-YYYY HH:mm
3. DD/MM/YYYY HH:mm */

let now = new Date();


let year = now.getFullYear();
let month = String(now.getMonth() + 1).padStart(2, '0');
let day = String(now.getDate()).padStart(2, '0');
let hours = String(now.getHours()).padStart(2, '0');
let minutes = String(now.getMinutes()).padStart(2, '0');


let format1 = `${year}-${month}-${day} ${hours}:${minutes}`;
let format2 = `${day}-${month}-${year} ${hours}:${minutes}`;
let format3 = `${day}/${month}/${year} ${hours}:${minutes}`;


console.log("YYYY-MM-DD HH:mm:", format1);
console.log("DD-MM-YYYY HH:mm:", format2);
console.log("DD/MM/YYYY HH:mm:", format3);
