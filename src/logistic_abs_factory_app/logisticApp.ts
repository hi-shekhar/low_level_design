import Transport from "./concrete_product/transport";
import CountryTransport from "./factory/transport";

export default class LogisticApp {
  private transport:CountryTransport
  constructor(transport:CountryTransport) {
    console.log("welcome to the Logistic App");
    this.transport = transport;
  }

  planDelivery(): Transport {
   return this.transport.deliver();
  }
}
