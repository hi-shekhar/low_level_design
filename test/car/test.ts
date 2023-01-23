import { expect } from "chai";

import Car from "../../src/car/car";
import HatchBack from "../../src/car/hatchback";
import AirCondition from "../../src/car/car_feature/air_condition";
import SportMode from "../../src/car/car_feature/sport_mode";

describe("Test the Car with Addon Features", () => {
  describe("Test HatchBack Car", () => {
    let hatchBack: Car;
    let rawMileage: number;
    before(() => {
      hatchBack = new HatchBack();
      rawMileage = hatchBack.getMileage();
    });

    it("Get the Hatchback Pure Mileage === 30", () => {
      expect(rawMileage).to.be.equal(30);
    });

    it("Switch on the AC and hatchBack mileage reduced by 1", () => {
      let ac = new AirCondition(hatchBack);
      let acMileage = ac.getMileage();
      expect(rawMileage - acMileage).to.be.equal(1);
    });

    it("Get the Sport Mode, hatchBack Mileage Reduce by 5", () => {
      let sportMode = new SportMode(hatchBack);
      let sportMileage = sportMode.getMileage();
      expect(rawMileage - sportMileage).to.be.equal(5);
    });

    it("Sport Mode + AC Reduce Mileage by 6", () => {
        let sportMode = new SportMode(hatchBack);
        let ac = new AirCondition(sportMode);
        let sportAcMileage = ac.getMileage();
        expect(rawMileage - sportAcMileage).to.be.equal(6);
      });
  });
});
