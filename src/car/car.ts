export default abstract class Car {
  description: string = "Car frame ready";
  constructor() {}

  getDescription(): void {
    console.log(this.description);
  }

  abstract getMileage(): number;
}
