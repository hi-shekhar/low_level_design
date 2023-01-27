import RoadLogistic from "../concrete_product_interface/roadLogistic";

export default class UsaTruck implements RoadLogistic {
  constructor() {
    console.log("\nTruck will deliver your assignments in USA");
  }

  planDelivery(): void {
    console.log("\n The payment will be in Dollar");
    this.deliver();
  }

  deliver(): void {
    console.log("\n USA Truck deliverring Assignment....");
    console.log("\n USA Truck delivered Assignment");
  }
}
