import RoadLogistic from "../concrete_product_interface/roadLogistic";
import SeaLogistic from "../concrete_product_interface/seaLogistic";

export default interface Transport {
  byRoad(): RoadLogistic;
  bySea(): SeaLogistic;
}
