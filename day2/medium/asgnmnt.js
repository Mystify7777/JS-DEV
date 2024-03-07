console.log("The quote'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");


console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."');


console.log(typeof(10)===typeof("10"));
var num = parseInt('10');
console.log('Type of both "10" and 10 made same:',typeof(10)===typeof(num)); 


console.log((10)===(parseFloat("9.8")));
console.log('Both value made exactly same:',(10)===(Math.ceil(parseFloat("9.8"))));


var strpy = 'python';
var strjar = 'jargon';
var isInPython = strpy.includes('on');
var isInJargon = strjar.includes('on');
if (isInPython && isInJargon) {
    console.log("'on' is found in both 'python' and 'jargon'");
} else {
    console.log("'on' is not found in both 'python' and 'jargon'");
}


var sentence = "I hope this course is not full of jargon.";
var isInSentence = sentence.includes('jargon');
if (isInSentence) {
    console.log("'jargon' is found in the sentence.");
} else {
    console.log("'jargon' is not found in the sentence.");
}


var randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber);


var randomNumber = Math.floor(Math.random() * 51) + 50;
console.log(randomNumber);



var randomNumber = Math.floor(Math.random() * 256);
console.log(randomNumber);


var str = 'JavaScript';
var randomIndex = Math.floor(Math.random() * str.length);
var randomCharacter = str[randomIndex];
console.log("Random character at index " + randomIndex + ": " + randomCharacter);


console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");


var sentence = 'You cannot end a sentence with because because because is a conjunction';
var startIndex = sentence.indexOf('because');
var extractedPhrase = sentence.substr(startIndex, 'because because because'.length);
console.log(extractedPhrase);
