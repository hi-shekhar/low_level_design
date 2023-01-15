import PaymentMethod from "./paymentMethod";

export class Wallet implements PaymentMethod {
  constructor() {}

  pay(): Promise<boolean> {
    console.log("Performing Wallet payment ...");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Wallet payment Done");
        return resolve(true);
      }, 200);
    });
  }

  collectPaymentDetails(): void {
    console.log("User Wallet details collected ...");
  }
}
