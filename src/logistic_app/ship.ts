import Transport from "./transport";

export default class Ship implements Transport {
  constructor() {
    console.log("Ship will deliver your assignments");
  }

  deliver(): void {
    console.log("Ship deliverring Assignment....");
    console.log("Ship delivered Assignment");
  }
}
