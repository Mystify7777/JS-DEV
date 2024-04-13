/*
First remove all the punctuations and change the string to array and count the
number of words in the array
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)
["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML",
"CSS", "JS", "React", "Python"]
13

*/
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

// Step 1: Remove all punctuations from the string
let cleanText = text.replace(/[.,]/g, '');

// Step 2: Split the string into an array of words
let wordsArray = cleanText.split(/\s+/);

// Step 3: Count the number of words in the array
let numberOfWords = wordsArray.length;
console.log(wordsArray)
console.log("Number of words in the array:", numberOfWords);
