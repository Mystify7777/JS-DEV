/*
1.Find the person who has many skills in the users object.

2.Count logged in users, count users having greater than equal to 50 points from the following object.

3. Find people who are MERN stack developer from the users object

4. Set your name in the users object without modifying the original users object

5. Get all keys or properties of users object

6. Get all the values of users object
*/

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
};
//1
let maxCount = 0;
let skillfulPerson = '';

for (const person in users) {
    const skillsCount = users[person].skills.length;
    if (skillsCount > maxCount) {
        maxCount = skillsCount;
        skillfulPerson = person;
    }
}

console.log(`${skillfulPerson} has the most skills with ${maxCount} skills.`);

//2
let loggedInUsersCount = 0;
let usersWith50OrMorePointsCount = 0;

for (const person in users) {
    if (users[person].isLoggedIn) {
        loggedInUsersCount++;
    }
    if (users[person].points >= 50) {
        usersWith50OrMorePointsCount++;
    }
}

console.log(`Number of logged-in users: ${loggedInUsersCount}`);
console.log(`Number of users with 50 or more points: ${usersWith50OrMorePointsCount}`);

//3
const mernStackDevelopers = [];
for (const person in users) {
    const skills = users[person].skills;
    if (skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node')) {
        mernStackDevelopers.push(person);
    }
}
console.log("MERN Stack Developers:", mernStackDevelopers);

//4
const modifiedUsers = { ...users };
modifiedUsers["Aryan"] = {
    email: 'aryankumar@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: true,
    points: 60
};
console.log("Modified Users Object:", modifiedUsers);

//5
const keysOfUsers = Object.keys(users);
console.log("Keys of Users Object:", keysOfUsers);

//6
const valuesOfUsers = Object.values(users);
console.log("Values of Users Object:", valuesOfUsers);

