import RoadLogistic from "../concrete_product_interface/roadLogistic";

export default class IndTruck implements RoadLogistic {
  constructor() {
    console.log("\nTruck will deliver your assignments in India");
  }

  planDelivery(): void {
    console.log("\n The payment will be in ruppee");
    this.deliver();
  }

  deliver(): void {
    console.log("\n India Truck deliverring Assignment....");
    console.log("\n India Truck delivered Assignment");
  }
}
