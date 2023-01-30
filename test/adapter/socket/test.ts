import {
  EuropeApliance,
  IndianApliance,
  IndiaToEuroAdapter,
} from "./../../../src/adapter/socket/socket";

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
