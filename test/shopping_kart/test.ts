import { expect } from "chai";
import { Card } from "../../src/shopping_kart/payment/card";
import ShoppingKart from "./../../src/shopping_kart/shoppingKart";

describe("Test the Shopping Kart", () => {
  describe("Shop for Code: 101 & 102", () => {
    let shoppingKart: ShoppingKart;

    before(() => {
      shoppingKart = new ShoppingKart();
    });

    it("Select the 2 product of Code:101", () => {
      shoppingKart.selectProduct(101);
      let product = shoppingKart.selectProduct(101);
      expect(product.find((item) => item.code === 101)?.quantity).equal(2);
    });

    it("Select the 1 product of Code:102", () => {
      let product = shoppingKart.selectProduct(102);
      expect(product.find((item) => item.code === 102)?.quantity).equal(1);
    });

    it("Do automatic payment", async () => {
      const rval = await shoppingKart.doPayment();
      expect(rval).true;
    });

    it("The Basket is Empty", async () => {
      expect(shoppingKart.basket.length).equal(0);
    });

    it("Product of Code:101 will have final quantity of 8", async () => {
      let product = shoppingKart.inventory.inventory.find(
        (x) => x.code === 101
      );
      expect(product?.quantity).equal(8);
    });

    it("Product of Code:102 will have final quantity of 19", async () => {
      let product = shoppingKart.inventory.inventory.find(
        (x) => x.code === 102
      );
      expect(product?.quantity).equal(19);
    });

    it("Again shop for the 1 product of Code:102", () => {
      let product = shoppingKart.selectProduct(102);
      expect(product.find((item) => item.code === 102)?.quantity).equal(1);
    });

    it("Do UPI payment", async () => {
      const rval = await shoppingKart.doPayment(new Card());
      expect(rval).true;
    });

    it("The Basket is Empty", async () => {
      expect(shoppingKart.basket.length).equal(0);
    });

    it("Product of Code:102 will have final quantity of 18", async () => {
      let product = shoppingKart.inventory.inventory.find(
        (x) => x.code === 102
      );
      expect(product?.quantity).equal(18);
    });
  });
});
