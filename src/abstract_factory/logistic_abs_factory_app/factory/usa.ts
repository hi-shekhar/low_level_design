import UsaShip from "../concrete_product/usa_ship";
import UsaTruck from "../concrete_product/usa_truck";
import RoadLogistic from "../concrete_product_interface/roadLogistic";
import SeaLogistic from "../concrete_product_interface/seaLogistic";
import Transport from "./transport";

export default class UsaFactory implements Transport {
  constructor() {
    console.log("\n **Welcome to USA transport**");
  }

  byRoad(): RoadLogistic {
    return new UsaTruck();
  }

  bySea(): SeaLogistic {
    return new UsaShip();
  }
}
