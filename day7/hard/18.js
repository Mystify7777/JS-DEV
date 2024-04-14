//JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
function isValidVariable(variableName) {
    
    const validStart = /^[a-zA-Z$_]/;
    
    const validChars = /^[a-zA-Z0-9$_]*$/;

    return validStart.test(variableName) && validChars.test(variableName);
}

console.log(isValidVariable('validVariable')); 
console.log(isValidVariable('$anotherValidVariable')); 
console.log(isValidVariable('_valid_variable')); 
console.log(isValidVariable('123invalidVariable')); 
console.log(isValidVariable('in%validVariable')); 
