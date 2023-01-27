import PaymentMethod from "./paymentMethod";

export class Upi implements PaymentMethod {
  constructor() {}

  pay(): Promise<boolean> {
    console.log("Performing UPI payment ...");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("UPI payment Done");
        return resolve(true);
      }, 200);
    });
  }

  collectPaymentDetails(): void {
    console.log("User UPI details collected ...");
  }
}
