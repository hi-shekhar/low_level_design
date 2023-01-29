import { Escort, Flight, Hotel, Logistic } from "./services";

export default class TourismFacade {
  logistic: Logistic;
  hotel: Hotel;
  flight: Flight;
  escort: Escort;

  constructor(logistic, hotel, flight, escort) {
    console.log("Welcome to the Tourism Facade");
    this.logistic = logistic;
    this.hotel = hotel;
    this.flight = flight;
    this.escort = escort;
  }

  economy() {
    this.logistic.driveToHotel();
    this.flight.economy();
    this.hotel.economy();
  }

  premiumEconomy() {
    this.logistic.driveToHotel();
    this.flight.premiumEconomy();
    this.hotel.premiumEconomy();
    this.logistic.driveToAirport();
  }

  premium() {
    this.logistic.driveToAirport();
    this.logistic.driveToHotel();
    this.flight.premium();
    this.hotel.premium();
    this.escort.service();
    this.logistic.driveToHome();
  }
}
