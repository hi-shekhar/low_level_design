import SeaLogistic from "../concrete_product_interface/seaLogistic";

export default class UsaShip implements SeaLogistic {
  constructor() {
    console.log("Ship will deliver your assignments in USA");
  }

  planDelivery(): void {
    console.log("\n The payment will be in Dollar");
    this.deliver();
  }

  deliver(): void {
    console.log("\n USA Ship deliverring Assignment....");
    console.log("\n USA Ship delivered Assignment");
  }
}
