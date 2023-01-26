import Transport from "./transport";

export default class Truck implements Transport {
  constructor() {
    console.log("Truck will deliver your assignments");
  }

  deliver(): void {
    console.log("Truck deliverring Assignment....");
    console.log("Truck delivered Assignment");
  }
}
