//1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

function findDistanceBetweenFurthestPoints(pointsText) {
    const regex = /-?\d+/g; 
    const points = pointsText.match(regex).map(Number); 

    points.sort((a, b) => a - b);

    const distance = Math.abs(points[points.length - 1] - points[0]);

    return distance;
}

const pointsText = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.';
const distance = findDistanceBetweenFurthestPoints(pointsText);
console.log(`Distance between the two furthest particles: ${distance}`);
