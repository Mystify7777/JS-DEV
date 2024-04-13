//An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
let acronym = '';

for (let i = 0; i < mernStack.length; i++) {
    acronym += mernStack[i][0];
}

console.log(acronym); // Output: MERN
