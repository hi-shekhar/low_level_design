import Transport from "./concrete_product/transport";

export default abstract class LogisticApp {
  constructor() {
    console.log("welcome to the Logistic App");
  }

  planDelivery(): Transport {
   return this.createTransport();
  }

  abstract createTransport(): Transport;
}
