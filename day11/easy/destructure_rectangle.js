//3. Destructure the rectangle object by its properties or keys.
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
  };
  const { width, height, area, perimeter } = rectangle;
  
  console.log(width); // 20
  console.log(height); // 10
  console.log(area); // 200
  console.log(perimeter); // 60
  