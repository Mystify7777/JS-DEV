/*
Copy the student object to newStudent without mutating the original object. In
the new object add the following ?
Add Bootstrap with level 8 to the front end skill sets
Add Express with level 9 to the back end skill sets
Add SQL with level 8 to the data base skill sets
Add SQL without level to the data science skill sets
const student = {
name: 'David',
age: 25,
skills: {
frontEnd: [
{ skill: 'HTML', level: 10 },
{ skill: 'CSS', level: 8 },
{ skill: 'JS', level: 8 },
{ skill: 'React', level: 9 }
],
backEnd: [
{ skill: 'Node',level: 7 },
{ skill: 'GraphQL', level: 8 },
],
dataBase:[
{ skill: 'MongoDB', level: 7.5 },
],
dataScience:['Python', 'R', 'D3.js']
}
}
The copied object output should look like this:
{
name: 'David',
age: 25,
skills: {
frontEnd: [
{skill: 'HTML',level: 10},
{skill: 'CSS',level: 8},
{skill: 'JS',level: 8},
{skill: 'React',level: 9},
{skill: 'BootStrap',level: 8}
],
backEnd: [
{skill: 'Node',level: 7},
{skill: 'GraphQL',level: 8},
{skill: 'Express',level: 9}
],
dataBase: [
{ skill: 'MongoDB',level: 7.5},
{ skill: 'SQL',level: 8}
],
dataScience: ['Python','R','D3.js','SQL']

}
}
*/

const student = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node', level: 7 },
        { skill: 'GraphQL', level: 8 }
      ],
      dataBase: [
        { skill: 'MongoDB', level: 7.5 }
      ],
      dataScience: ['Python', 'R', 'D3.js']
    }
  };
  
 
  const newStudent = JSON.parse(JSON.stringify(student));
  
 
  newStudent.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 });
  newStudent.skills.backEnd.push({ skill: 'Express', level: 9 });
  newStudent.skills.dataBase.push({ skill: 'SQL', level: 8 });
  newStudent.skills.dataScience.push('SQL');
  
  console.log("Before update:");
  console.log(JSON.stringify(student, null, 2));
  
  console.log("\nAfter update:");
  console.log(JSON.stringify(newStudent, null, 2));