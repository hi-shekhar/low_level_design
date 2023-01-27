import { expect } from "chai";
import Transport from "../../src/logistic_abs_factory_app/factory/transport";
import IndiaFactory from "../../src/logistic_abs_factory_app/factory/india";
import UsaFactory from "../../src/logistic_abs_factory_app/factory/usa";
import RoadLogistic from "../../src/logistic_abs_factory_app/concrete_product_interface/roadLogistic";
import IndTruck from "../../src/logistic_abs_factory_app/concrete_product/ind_truck";
import SeaLogistic from "../../src/logistic_abs_factory_app/concrete_product_interface/seaLogistic";
import IndShip from "../../src/logistic_abs_factory_app/concrete_product/ind_ship";
import UsaTruck from "../../src/logistic_abs_factory_app/concrete_product/usa_truck";
import UsaShip from "../../src/logistic_abs_factory_app/concrete_product/usa_ship";
import LogisticApp from "../../src/logistic_abs_factory_app/logisticApp";

describe("Test the Country Logistic Application", () => {

  describe("Test India Logistic", () => {
    let indLogistic: Transport = new IndiaFactory();
    let logistic = new LogisticApp(indLogistic)

    it("Select the Truck vehicle", () => {
      let truck: RoadLogistic = logistic.planDeliveryByRoad();
      truck.planDelivery();
      expect(truck).to.be.instanceOf(IndTruck);
    });

    it("Select the Sea vehicle", () => {
      let ship: SeaLogistic = logistic.planDeliveryBySea();
      ship.planDelivery();
      expect(ship).to.be.instanceOf(IndShip);
    });
  });

  describe("Test USA Logistic", () => {
    let usaLogistic: Transport = new UsaFactory();
    let logistic = new LogisticApp(usaLogistic)

    it("Select the Truck vehicle", () => {
      let truck: RoadLogistic = logistic.planDeliveryByRoad();
      truck.planDelivery();
      expect(truck).to.be.instanceOf(UsaTruck);
    });

    it("Select the Sea vehicle", () => {
      let ship: SeaLogistic = logistic.planDeliveryBySea();
      ship.planDelivery();
      expect(ship).to.be.instanceOf(UsaShip);
    });
  });

});
