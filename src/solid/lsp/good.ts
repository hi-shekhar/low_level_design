interface Shape {
    getArea(): number;
}

export class Rectangle implements Shape {
    constructor(public width: number, public height: number) { }

    getArea(): number {
        return this.width * this.height;
    }
}

export class Square implements Shape {
    constructor(public side: number) { }

    getArea(): number {
        return this.side * this.side;
    }
}

function printArea(shape: Shape): void {
    console.log("Area: " + shape.getArea());
}

const rect = new Rectangle(5, 10);
printArea(rect); // Output: 50 (Correct)

const square = new Square(5);
printArea(square); // Output: 25 (Correct)

const rect2 = new Rectangle(5, 10);
rect2.width += 10;
printArea(rect2); //Output: 150

//We can not do this anymore, since we removed the setter methods
//square.width += 10; //Error
//printArea(square);