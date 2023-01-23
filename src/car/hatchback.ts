import Car from "./car";

export default class HatchBack extends Car {
  constructor() {
    super();
    this.description = "Welcome to HatchBack";
    console.log(this.getDescription());
  }

  getDescription(): void {
    console.log(this.description);
  }

  getMileage(): number {
    return 30;
  }
}
