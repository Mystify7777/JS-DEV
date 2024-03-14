/*Compare your first name length and your family name length and you should get
this output.
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
Your first name, Asabeneh is longer than your family name, Yetayeh */

let firstName = 'Aryan';
let lastName = 'Kumar';


if (firstName.length > lastName.length) {
    console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}.`);
} else if (firstName.length < lastName.length) {
    console.log(`Your last name, ${lastName} is longer than your first name, ${firstName}.`);
} else {
    console.log(`Your first name, ${firstName} and last name, ${lastName} have the same length.`);
}
