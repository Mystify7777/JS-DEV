//Access the 'JavaScript' string characters using a random number.
var str = 'JavaScript';

var randomIndex = Math.floor(Math.random() * str.length);

var randomCharacter = str[randomIndex];

console.log("Random character at index " + randomIndex + ": " + randomCharacter);