//I hope this course is not full of jargon. Check if jargon is in the sentence.
var sentence = "I hope this course is not full of jargon.";

var isInSentence = sentence.includes('jargon');

if (isInSentence) {
    console.log("'jargon' is found in the sentence.");
} else {
    console.log("'jargon' is not found in the sentence.");
}