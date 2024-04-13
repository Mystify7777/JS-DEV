//Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

const techStack = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
//Using a for loop:
for (let i = 0; i < techStack.length; i++) {
    console.log(techStack[i]);
}
//Using a for...of loop:
for (const item of techStack) {
    console.log(item);
}