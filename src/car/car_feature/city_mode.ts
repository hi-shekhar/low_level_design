import Car from "../car";
import CarFeatureDecorator from "./car_featue";

export default class CityMode extends CarFeatureDecorator {
  car: Car;
  constructor(car: Car) {
    super();
    this.car = car;
    console.log(this.getDescription());
  }

  getDescription(): string {
    return "City Mode Activated";
  }

  getMileage(): number {
    return this.car.getMileage();
  }
}
