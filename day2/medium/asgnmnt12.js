/*Use substr to slice out the phrase because because because from the following
sentence:'You cannot end a sentence with because because because is a
conjunction' */
var sentence = 'You cannot end a sentence with because because because is a conjunction';

var startIndex = sentence.indexOf('because');

var extractedPhrase = sentence.substr(startIndex, 'because because because'.length);

console.log(extractedPhrase);