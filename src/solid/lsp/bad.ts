export class Rectangle {
    width: number;
    height: number;

    setWidth(width: number): void {
        this.width = width;
    }

    setHeight(height: number): void {
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

export class Square extends Rectangle {
    setWidth(width: number): void {
        super.setWidth(width);
        super.setHeight(width); // Maintain equal sides
    }

    setHeight(height: number): void {
        super.setWidth(height); // Maintain equal sides
        super.setHeight(height);
    }
}

function increaseRectangleWidth(rectangle: Rectangle): void {
    rectangle.setWidth(rectangle.width + 10);
}

const rect = new Rectangle();
rect.setWidth(5);
rect.setHeight(10);
increaseRectangleWidth(rect);
console.log(rect.getArea()); // Output: 150 (Correct)

const square = new Square();
square.setWidth(5);
increaseRectangleWidth(square); // Problem here!
console.log(square.getArea()); // Output: 225 (Incorrect - should be 75 if behaving like a square)