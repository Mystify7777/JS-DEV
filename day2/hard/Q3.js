/*Clean the following text and find the most frequent word (hint, use replace and
regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;.
The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng
peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es
thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so
$the $resu@lt of &love& of tea&ching' */

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

const cleanedText = sentence.replace(/[^\w\s]/gi, '');

const words = cleanedText.split(/\s+/);

const wordCounts = {};
words.forEach(word => {
    word = word.toLowerCase();
    wordCounts[word] ? wordCounts[word]++ : wordCounts[word] = 1;
});

let mostFrequentWord = '';
let maxCount = 0;
for (const [word, count] of Object.entries(wordCounts)) {
    if (count > maxCount) {
        mostFrequentWord = word;
        maxCount = count;
    }
}

console.log("Most frequent word:", mostFrequentWord);
