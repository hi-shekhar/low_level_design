import LogisticApp from "./logisticApp";
import Transport from "./transport";
import Truck from "./truck";

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
