import Garage from "../receiver/garage";
import Command from "./command";

export class GarageOpenCommand implements Command {
  garage: Garage;
  constructor(garage: Garage) {
    this.garage = garage;
  }

  execute(): void {
    this.garage.open();
  }

  undo(): void {
    this.garage.close();
  }
}

export class GarageCloseCommand implements Command {
  garage: Garage;
  constructor(garage: Garage) {
    this.garage = garage;
  }

  execute(): void {
    this.garage.close();
  }

  undo(): void {
    this.garage.open();
  }
}
