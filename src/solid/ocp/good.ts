interface Shape {
    calculateArea(): number;
}

class Rectangle implements Shape {
    constructor(public width: number, public height: number) { }

    calculateArea(): number {
        return this.width * this.height;
    }
}

class Circle implements Shape {
    constructor(public radius: number) { }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Triangle implements Shape {
    constructor(public base: number, public height: number) { }

    calculateArea(): number {
        return (this.base * this.height) / 2
    }
}

class AreaCalculator {
    calculateArea(shape: Shape): number {
        return shape.calculateArea();
    }
}

function testArea() {
    const calculator = new AreaCalculator();
    const rectangle = new Rectangle(10, 5);
    const circle = new Circle(3);
    const triangle = new Triangle(4, 6);

    console.log(calculator.calculateArea(rectangle)); // Output: 50
    console.log(calculator.calculateArea(circle));   // Output: 28.274333882308138
    console.log(calculator.calculateArea(triangle)); // Output: 12

    // Extending the functionality without modifying existing code
    class Square implements Shape {
        constructor(public side: number) { }

        calculateArea(): number {
            return this.side * this.side;
        }
    }

    const square = new Square(5);
    console.log(calculator.calculateArea(square)); // Output: 25
}

