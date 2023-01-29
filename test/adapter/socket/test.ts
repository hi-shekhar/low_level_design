import {
  EuropeApliance,
  IndianApliance,
  IndiaToEuroAdapter,
} from "./../../../src/adapter/socket/socket";
import * as sinon from "sinon";

describe("Test the Adapter", () => {
  let indianApliance: IndianApliance;
  let europeApliance: EuropeApliance;

  before(() => {
    indianApliance = new IndianApliance();
    europeApliance = new EuropeApliance();
  });

  it("attach the indian appliance to europe standard", () => {
    let adapter =  new IndiaToEuroAdapter(indianApliance);
    adapter.twoPinPlug();
  });
});
