//Check if 'on' is found in both python and jargon
var strpy = 'python';
var strjar = 'jargon';

var isInPython = strpy.includes('on');
var isInJargon = strjar.includes('on');

if (isInPython && isInJargon) {
    console.log("'on' is found in both 'python' and 'jargon'");
} else {
    console.log("'on' is not found in both 'python' and 'jargon'");
}
