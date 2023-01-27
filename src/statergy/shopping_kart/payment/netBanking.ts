import PaymentMethod from "./paymentMethod";

export class NetBanking implements PaymentMethod {
  constructor() {}

  pay(): Promise<boolean> {
    console.log("Performing NetBanking payment ...");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("NetBanking payment Done");
        return resolve(true);
      }, 200);
    });
  }

  collectPaymentDetails(): void {
    console.log("User NetBanking details collected ...");
  }
}
