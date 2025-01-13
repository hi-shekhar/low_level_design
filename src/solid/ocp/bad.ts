class BadAreaCalculator {
  calculateArea(shape: any): number {
    if (shape.type === 'rectangle') {
      return shape.width * shape.height;
    } else if (shape.type === 'circle') {
      return Math.PI * shape.radius * shape.radius;
    } else if (shape.type === 'triangle') {
      return (shape.base * shape.height) / 2
    }
    // ... more shapes could be added here
    else {
      throw new Error('Invalid shape type.');
    }
  }
}

function testAreaBad() {
  const calculator = new BadAreaCalculator();
  const rectangle = { type: 'rectangle', width: 10, height: 5 };
  const circle = { type: 'circle', radius: 3 };
  const triangle = { type: 'triangle', base: 4, height: 6 }

  console.log(calculator.calculateArea(rectangle)); // Output: 50
  console.log(calculator.calculateArea(circle));   // Output: 28.274333882308138
  console.log(calculator.calculateArea(triangle)); // Output: 12
}

