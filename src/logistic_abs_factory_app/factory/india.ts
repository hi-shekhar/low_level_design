import IndShip from "../concrete_product/ind_ship";
import IndTruck from "../concrete_product/ind_truck";
import RoadLogistic from "../concrete_product_interface/roadLogistic";
import SeaLogistic from "../concrete_product_interface/seaLogistic";
import Transport from "./transport";

export default class IndiaFactory implements Transport {
  constructor() {
    console.log("\n **Welcome to India transport**");
  }

  byRoad(): RoadLogistic {
    return new IndTruck();
  }

  bySea(): SeaLogistic {
    return new IndShip();
  }
}
