import { Payment } from "./payment";

export class Card implements Payment {
  constructor() {}

  pay(): Promise<boolean> {
    console.log("Performing card payment ...");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Card payment Done");
        return resolve(true);
      }, 200);
    });
  }

  collectPaymentDetails(): void {
    console.log("User card details collected ...");
  }
}
