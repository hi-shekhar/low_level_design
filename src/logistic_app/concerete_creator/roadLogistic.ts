import LogisticApp from "../logisticApp";
import Transport from "../concrete_product/transport";
import Truck from "../concrete_product/truck";

export default class RoadLogistic extends LogisticApp {
  constructor() {
    super();
    console.log("Thanks for picking Road Logistic");
  }

  createTransport(): Transport {
    console.log("Product will be delivered by Road Mode ");
    return new Truck();
  }
}
