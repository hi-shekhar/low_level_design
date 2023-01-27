import Car from "../car";

export default abstract class CarFeatureDecorator extends Car {
    abstract getMileage(): number;
}
