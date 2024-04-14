/*Modify the userIdGenerator function. Declare a function name
userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs
using prompt(). One of the input is the number of characters and the second
input is the number of ids which are supposed to be generated.
*/
function userIdGeneratedByUser() {
    const numberOfCharacters = parseInt(prompt("Enter the number of characters for each ID:"));
    const numberOfIds = parseInt(prompt("Enter the number of IDs to generate:"));
    let userIds = "";
    for (let j = 0; j < numberOfIds; j++) {
        let userId = "";
        for (let i = 0; i < numberOfCharacters; i++) {
            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            userId += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        userIds += userId + "\n";
    }
    return userIds;
}

console.log(userIdGeneratedByUser());
console.log(userIdGeneratedByUser());
