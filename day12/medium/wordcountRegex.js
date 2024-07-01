//1. Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
function tenMostFrequentWords(paragraph, limit = 10) {
   
    const words = paragraph.toLowerCase().match(/\b\w+\b/g);

    
    const wordCount = {};
    words.forEach(word => {
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    });

    
    const sortedWords = Object.keys(wordCount).sort((a, b) => wordCount[b] - wordCount[a]);

   
    const result = sortedWords.slice(0, limit).map(word => ({ word: word, count: wordCount[word] }));

    return result;
}

const paragraph = `I love teaching. If you do not love teaching what else can
you love. I love Python if you do not love something which can give you all the
capabilities to develop an application what else can you love.`;

console.log(tenMostFrequentWords(paragraph));
console.log(tenMostFrequentWords(paragraph, 10));
