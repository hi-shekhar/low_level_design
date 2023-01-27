import RoadLogistic from "./concrete_product_interface/roadLogistic";
import SeaLogistic from "./concrete_product_interface/seaLogistic";
import Transport from "./factory/transport";

export default class LogisticApp {
  private transport: Transport;
  constructor(transport: Transport) {
    console.log("welcome to the Logistic App");
    this.transport = transport;
  }

  planDeliveryByRoad(): RoadLogistic {
    return this.transport.byRoad();
  }

  planDeliveryBySea(): SeaLogistic {
    return this.transport.bySea();
  }
}
