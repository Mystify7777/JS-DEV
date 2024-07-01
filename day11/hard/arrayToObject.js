/*
Write a function called convertArrayToObject which can convert the array to a
structure object.
const students = [
['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
console.log(convertArrayToObject(students))
[
{
name: 'David',
skills: ['HTM','CSS','JS','React'],
scores: [98,85,90,95]
},
{
name: 'John',
skills: ['HTM','CSS','JS','React'],
scores: [85, 80,85,80]
}
]
*/

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ];
  
  function convertArrayToObject(students) {
    return students.map(([name, skills, scores]) => ({ name, skills, scores }));
  }
  
  console.log(convertArrayToObject(students));
  