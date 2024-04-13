const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
    ]

let index = webTechs.indexOf('Sass');

if (index !== -1) {
    console.log('Sass is a CSS preprocess');
} else {
    webTechs.push('Sass');
    console.log("Sass added to the array");
}

console.log("Updated webTechs array:", webTechs);
