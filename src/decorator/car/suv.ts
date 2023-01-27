import Car from "./car";

export default class Suv extends Car {
  constructor() {
    super();
    this.description = "Welcome to SUV";
    console.log(this.getDescription());
  }

  getMileage(): number {
    return 20;
  }
}
