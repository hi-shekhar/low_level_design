import Transport from "./transport";

export default abstract class LogisticApp {
  constructor() {
    console.log("welcome to the Logistic App");
  }

  planDelivery() {}

  abstract createTransport(): Transport;
}
