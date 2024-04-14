//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
}

const length = 5;
const width = 3;
const perimeter = perimeterOfRectangle(length, width);
console.log("Perimeter of the rectangle:", perimeter); 