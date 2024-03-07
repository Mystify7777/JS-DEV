/*'Love is the best thing in this world. Some found their love and some are still
looking for their love.' Count the number of word love in this sentence. */

var sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';

var matches = sentence.match(/\blove\b/gi);

var loveCount = matches ? matches.length : 0;

console.log("Number of occurrences of 'love': " + loveCount);
