import SeaLogistic from "../concrete_product_interface/seaLogistic";

export default class IndShip implements SeaLogistic {
  constructor() {
    console.log("Ship will deliver your assignments in India");
  }

  planDelivery(): void {
    console.log("\n The payment will be in ruppee");
    this.deliver();
  }

  deliver(): void {
    console.log("\n India Ship deliverring Assignment....");
    console.log("\n India Ship delivered Assignment");
  }
}
