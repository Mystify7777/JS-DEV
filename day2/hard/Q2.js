/*Use match() to count the number of all because in the following sentence:'You
cannot end a sentence with because because because is a conjunction'
*/
var sentence = 'You cannot end a sentence with because because because is a conjunction';

var matches = sentence.match(/\bbecause\b/g);

var count = matches ? matches.length : 0;

console.log("Number of occurrences of 'because': " + count);
