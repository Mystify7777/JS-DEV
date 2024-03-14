//Compare the slope of above two questions.
const x=Math.random()*100;
let m=2;
let c=-2;
let y = m*x+c;

//point 1
let x1=2;
let y1=2;

//point 2
let x2=6;
let y2=10

//calculate slope
let slope=(y2-y1)/(x2-x1);

// Compare the slopes
if (slope === m) {
    console.log("The slope of both scenarios is equal.");
} else {
    console.log("The slope of both scenarios is not equal.");
}