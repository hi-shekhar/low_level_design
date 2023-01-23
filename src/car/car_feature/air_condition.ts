import Car from "../car";
import CarFeatureDecorator from "./car_featue";

export default class AirCondition extends CarFeatureDecorator {
  car: Car;
  constructor(car: Car) {
    super();
    this.car = car;
    console.log(this.getDescription());
  }

  getDescription(): string {
    return "Air Condition in on";
  }

  getMileage(): number {
    return this.car.getMileage() - 1;
  }
}
