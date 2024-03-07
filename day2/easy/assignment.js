console.log("\n-------------------------1---------------------------\n");
let challenge = '30 Days Of JavaScript'; //1
console.log("\n-------------------------2---------------------------\n");

console.log(challenge);//2
console.log("\n-------------------------3---------------------------\n");

console.log(challenge.length);//3
console.log("\n-------------------------4---------------------------\n");

let string = challenge.toUpperCase();//4
console.log(string);
console.log("\n-------------------------5---------------------------\n");

string=challenge.toLowerCase();//5
console.log(string);
console.log("\n-------------------------6---------------------------\n");

console.log(string.substring(0,2));//6
console.log("\n-------------------------7---------------------------\n");

string = '30 Days Of JavaScript';
console.log(string.substring(3));//7
console.log("\n-------------------------8---------------------------\n");

console.log(string.includes('Script'))//8
console.log("\n-------------------------9---------------------------\n");

console.log(string.split(''));//9
console.log("\n-------------------------10--------------------------\n");

console.log(string.split(' '));//10
console.log("\n-------------------------11--------------------------\n");

let company='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(company.split(","));//11
console.log("\n-------------------------12--------------------------\n");

console.log(string.replace('JavaScript','Python'));//12
console.log(string);
console.log("\n-------------------------13--------------------------\n");

console.log(string.charAt(15));//13
console.log("\n-------------------------14--------------------------\n");

console.log(string.charCodeAt(string.indexOf('J')));//14
console.log("\n-------------------------15--------------------------\n");

console.log(string.indexOf('a'));//15
console.log("\n-------------------------16--------------------------\n");

console.log(string.lastIndexOf('a'));//16
console.log("\n-------------------------17--------------------------\n");

let sentence='You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'));//17
console.log("\n-------------------------18--------------------------\n");

console.log(sentence.lastIndexOf('because'));//18
console.log("\n-------------------------19--------------------------\n");

console.log(sentence.search('because'));//19
console.log("\n-------------------------20--------------------------\n");

let string2= ' '+string+" ";
console.log(string2);
console.log(string2.trim());//20
console.log("\n-------------------------21--------------------------\n");

console.log(string.startsWith("30"));//21
console.log("\n-------------------------22--------------------------\n");

console.log(string.endsWith("Script"));//22
console.log("\n-------------------------23--------------------------\n");

console.log(string.match('a'));
console.log(string.match(/a/));
console.log(string.match(/a/gi));//23
console.log("\n-------------------------24--------------------------\n");

let str = '30 Days Of';
console.log(str.concat(' JavaScript'));//24
console.log("\n-------------------------25--------------------------\n");

console.log(string.repeat(2));//25
console.log("\n------------------------end--------------------------\n");