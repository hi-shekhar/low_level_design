import { Inventory, ItemShelf } from "./inventory/inventory";
import PaymentMethod from "./payment/paymentMethod";
import { Card } from "./payment/card";
import { NetBanking } from "./payment/netBanking";
import { Upi } from "./payment/upi";
import { Wallet } from "./payment/wallet";

export default class ShoppingKart {
  inventory: Inventory;
  basket: ItemShelf[] = [];
  payment: PaymentMethod;
  constructor() {
    console.log("Let do shopping");
    this.inventory = new Inventory();
  }

  selectProduct(code: number): ItemShelf[] {
    const poductIndex = this.basket.findIndex((item) => item.code === code);
    if (poductIndex !== -1) {
      this.basket[poductIndex].quantity += 1;
    } else {
      let product = {
        ...this.inventory.inventory.find((item) => item.code === code),
      };
      product.quantity = 1;
      this.basket.push(product);
    }

    return this.basket;
  }

  cancelProduct(code, quantity): ItemShelf[] {
    const poductIndex = this.basket.findIndex((item) => item.code === code);
    this.basket[poductIndex].quantity === quantity
      ? this.basket.splice(poductIndex, 1)
      : (this.basket[poductIndex].quantity -= quantity);
    return this.basket;
  }

  getFinalAmount(): number {
    let finalPrice = 0;
    for (let i = 0; i < this.basket.length; i++) {
      finalPrice += this.basket[i].price * this.basket[i].quantity;
    }

    return finalPrice;
  }

  updateProduct() {
    for (let i = 0; i < this.basket.length; i++) {
      let product = this.inventory.inventory.find(
        (x) => x.code === this.basket[i].code
      );
      product.quantity -= this.basket[i].quantity;
    }
  }

  // As console read is not direct way in node.js so, going through random way
  async doPayment(payMethod?: PaymentMethod | undefined): Promise<Boolean> {
    try {
      let paymentMethods = [
        new Card(),
        new NetBanking(),
        new Upi(),
        new Wallet(),
      ];

      payMethod =
        payMethod === undefined
          ? paymentMethods[Math.floor(Math.random() * paymentMethods.length)]
          : payMethod;

      payMethod.collectPaymentDetails();
      await payMethod.pay();
      this.updateProduct();
      this.basket = [];
      this.inventory.displayInventory();
      return Promise.resolve(true);
    } catch (err) {
      return Promise.reject();
    }
  }
}
