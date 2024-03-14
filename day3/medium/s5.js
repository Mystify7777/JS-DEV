//Calculate the slope, x-intercept and y-intercept of y = 2x -2

var x = Math.random()*100;
let m = 2;
let c = -2;


//find slope
console.log(`The slope is ${m}`);

//find x intercept, put y=0
var y = 0;
var x = (y-c)/m;;
console.log (`The x intercept is:${x}`);

//find y intercept, put x=0
var x=0;
var y = m*x + c;
console.log (`The y intercept is:${y}`);
