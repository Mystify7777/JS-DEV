/*
Write a loop that makes the following pattern using console.log():
#
##
###
####
#####
######
#######
*/
console.log("Pattern:");

for (let i = 1; i <= 7; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += '#';
    }
    console.log(line);
}
