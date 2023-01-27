import Ship from "../concrete_product/ship";
import Transport from "../concrete_product/transport";
import LogisticApp from "../logisticApp";


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
