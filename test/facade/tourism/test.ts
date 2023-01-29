import * as sinon from "sinon";

import {
  Escort,
  Flight,
  Hotel,
  Logistic,
} from "./../../../src/facade/tourism/services";
import TourismFacade from "./../../../src/facade/tourism/facade";
import { expect } from "chai";

describe("Test the Facade : Tourism ", () => {
  let logistic: Logistic;
  let hotel: Hotel;
  let flight: Flight;
  let escort: Escort;
  let facade: TourismFacade;

  before(() => {
    logistic = new Logistic();
    hotel = new Hotel();
    flight = new Flight();
    escort = new Escort();
  });

  it("Instantiate the Hotel Facade", () => {
    facade = new TourismFacade(logistic, hotel, flight, escort);
    expect(facade).to.be.instanceOf(TourismFacade);
  });

  it("Book Economy", () => {
    let driveToHotel = sinon.spy(logistic, "driveToHotel");
    let flightEconomy = sinon.spy(flight, "economy");
    let hotelEconomy = sinon.spy(hotel, "economy");
    facade.economy();
    expect(driveToHotel.calledOnce).to.be.true;
    expect(flightEconomy.calledOnce).to.be.true;
    expect(hotelEconomy.calledOnce).to.be.true;
    driveToHotel.restore();
    flightEconomy.restore();
    hotelEconomy.restore();
  });

  it("Book Premium Economy", () => {
    let driveToHotel = sinon.spy(logistic, "driveToHotel");
    let flightpremiumEconomy = sinon.spy(flight, "premiumEconomy");
    let hotelpremiumEconomy = sinon.spy(hotel, "premiumEconomy");
    let driveToAirport = sinon.spy(logistic, "driveToAirport");
    facade.premiumEconomy();
    expect(driveToHotel.calledOnce).to.be.true;
    expect(flightpremiumEconomy.calledOnce).to.be.true;
    expect(hotelpremiumEconomy.calledOnce).to.be.true;
    expect(driveToAirport.calledOnce).to.be.true;
    driveToHotel.restore();
    flightpremiumEconomy.restore();
    hotelpremiumEconomy.restore();
    driveToAirport.restore();
  });

  it("Book Premium", () => {
    let driveToAirport = sinon.spy(logistic, "driveToAirport");
    let driveToHotel = sinon.spy(logistic, "driveToHotel");
    let driveToHome = sinon.spy(logistic, "driveToHome");
    let flightpremium = sinon.spy(flight, "premium");
    let hotelpremium = sinon.spy(hotel, "premium");
    let escortService = sinon.spy(escort, "service");
    facade.premium();
    expect(driveToHotel.calledOnce).to.be.true;
    expect(flightpremium.calledOnce).to.be.true;
    expect(hotelpremium.calledOnce).to.be.true;
    expect(driveToAirport.calledOnce).to.be.true;
    expect(escortService.calledOnce).to.be.true;
    expect(driveToHome.calledOnce).to.be.true;
    driveToHotel.restore();
    flightpremium.restore();
    hotelpremium.restore();
    driveToAirport.restore();
    escortService.restore();
    driveToHome.restore();
  });
});
