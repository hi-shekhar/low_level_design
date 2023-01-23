import Car from "../car";
import CarFeatureDecorator from "./car_featue";

export default class SportMode extends CarFeatureDecorator {
  car: Car;
  constructor(car: Car) {
    super();
    this.car = car;
    console.log(this.getDescription());
  }

  getDescription(): string {
    return "Sport Mode Activated";
  }

  getMileage(): number {
    return this.car.getMileage() - 5;
  }
}
