//Find the longest word in the webTechs array
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];

let longestWord = '';

for (let i = 0; i < webTechs.length; i++) {
    if (webTechs[i].length > longestWord.length) {
        longestWord = webTechs[i];
    }
}

console.log("The longest word in webTechs array:", longestWord);
