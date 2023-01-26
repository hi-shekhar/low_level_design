import LogisticApp from "./logisticApp";
import Ship from "./ship";
import Transport from "./transport";

export default class SeaLogistic extends LogisticApp {
  constructor() {
    super();
    console.log("Thanks for picking Sea Logistic");
  }

  createTransport(): Transport {
    console.log("Product will be delivered by Sea Mode ");
    return new Ship();
  }
}
