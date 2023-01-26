import { expect } from "chai";
import Transport from "../../src/logistic_app/transport";

import RoadLogistic from "./../../src/logistic_app/roadLogistic";
import SeaLogistic from "./../../src/logistic_app/seaLogistic";

import Truck from "../../src/logistic_app/truck";
import Ship from "../../src/logistic_app/ship";

describe("Test the Logistic Application", () => {

  describe("Test Road Logistic", () => {
    let roadLogistic: RoadLogistic = new RoadLogistic();

    it("Select the Truck vehicle", () => {
      let truck: Transport = roadLogistic.createTransport();
      expect(truck).to.be.instanceOf(Truck);
    });
  });

  describe("Test Sea Logistic", () => {
    let seaLogistic: SeaLogistic = new SeaLogistic();

    it("Select the Ship vehicle", () => {
      let ship: Transport = seaLogistic.createTransport();
      expect(ship).to.be.instanceOf(Ship);
    });
  });

});
