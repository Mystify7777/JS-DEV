/*
Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
*/

function cleanTextAndFindTopWords(sentence, limit = 3) {
   
    const cleanedText = sentence.replace(/[%$@&#;]/g, '').replace(/\b[^a-zA-Z0-9 ]+\b/g, '');


    const words = cleanedText.match(/\b\w+\b/g);

    const wordCount = {};
    words.forEach(word => {
        const lowerCaseWord = word.toLowerCase(); 
        if (wordCount[lowerCaseWord]) {
            wordCount[lowerCaseWord]++;
        } else {
            wordCount[lowerCaseWord] = 1;
        }
    });

    const sortedWords = Object.keys(wordCount).sort((a, b) => wordCount[b] - wordCount[a]);
    const topWords = sortedWords.slice(0, limit).map(word => ({ word: word, count: wordCount[word] }));

    return {
        cleanedText: cleanedText,
        topWords: topWords
    };
}

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is 
nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I 
found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s 
mo@tivate yo@u to be a tea@cher!?`;

//Write a function which cleans text.
const result = cleanTextAndFindTopWords(sentence);
console.log("Cleaned Text:");
console.log(result.cleanedText);

//Write a function which find the most frequent words.
console.log("\nTop 3 Words:");
console.log(result.topWords);
