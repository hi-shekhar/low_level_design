import { expect } from "chai";
import { IdleState } from "../../../src/state_design/vending_machine/states/idle";
import { SelectionState } from "../../../src/state_design/vending_machine/states/selection";
import { VendingMachine } from "./../../../src/state_design/vending_machine/vendingMachine";
import State from "./../../../src/state_design/vending_machine/states/state";
import { PaymentState } from "../../../src/state_design/vending_machine/states/payment";

describe("Test the Vending Machine", () => {
  describe("Perfect scenario: Buy Coca-Cola , Code: 101", () => {
    let vendingMachine: VendingMachine;
    let currentState: State;
    let SHELF_COUNT = 6;

    before(() => {
      vendingMachine = new VendingMachine(SHELF_COUNT);
      currentState = vendingMachine.state;
    });

    it("Vending Machine should be initialized", () => {
      expect(vendingMachine).to.be.instanceOf(VendingMachine);
      expect(vendingMachine.state).to.be.instanceOf(IdleState);
      expect(vendingMachine.getVaultMoney()).equal(0);
      expect(vendingMachine.getTransactionMoney()).equal(0);
    });

    it("Vending Machine after setup should have Coca-Cola", () => {
      vendingMachine.addItemsToInventory();
      vendingMachine.displayInventory();
      expect(vendingMachine.inventory.getItemDetail(101)).to.have.property(
        "item",
        "Coco-Cola"
      );
    });

    it("Intial stage should be in Idle State", () => {
      expect(currentState).to.be.instanceOf(IdleState);
    });

    it("Inital Vault Money and Transaction Money should be Zero", () => {
      expect(vendingMachine.getVaultMoney()).equal(0);
      expect(vendingMachine.getTransactionMoney()).equal(0);
    });

    it("Switch to Accept Money State", () => {
      currentState.selectInsertMoney(vendingMachine);
      currentState = vendingMachine.state;
      expect(currentState).to.be.instanceOf(PaymentState);
    });

    it("Insert money in Vending Machine", () => {
      currentState.payment(vendingMachine, 50);
      expect(vendingMachine.getTransactionMoney()).equal(50);
    });

    it("Switch the Vending Machine status to Selection State", () => {
      currentState.selectProductSelection(vendingMachine);
      currentState = vendingMachine.state;
      expect(currentState).to.be.instanceOf(SelectionState);
    });

    it("Select Item (Coca-Cola) & Dispense the Product", () => {
      currentState.chooseProduct(vendingMachine, 101);
      currentState = vendingMachine.state;
      expect(currentState).to.be.instanceOf(IdleState);
    });

    it("Finish the Product & Change Money", () => {
      expect(vendingMachine.getTransactionMoney()).equal(0);
      expect(vendingMachine.getVaultMoney()).equal(10);
    });

    it("The inventory should be upto date i.e Coca-Cola Quantity should be 9", () => {
      let item = vendingMachine.inventory.getItemDetail(101);
      expect(item.quantity).equal(9);
    });
  });

  describe("Wrong Code Selection: Buy Coca-Cola , Code: 101", () => {
    let vendingMachine: VendingMachine;
    let currentState: State;
    let SHELF_COUNT = 6;

    before(() => {
      vendingMachine = new VendingMachine(SHELF_COUNT);
      currentState = vendingMachine.state;
    });
    it("Vending Machine should be initialized", () => {
      expect(vendingMachine).to.be.instanceOf(VendingMachine);
      expect(vendingMachine.state).to.be.instanceOf(IdleState);
      expect(vendingMachine.getVaultMoney()).equal(0);
      expect(vendingMachine.getTransactionMoney()).equal(0);
    });

    it("Vending Machine after setup should have Coca-Cola", () => {
      vendingMachine.addItemsToInventory();
      vendingMachine.displayInventory();
      expect(vendingMachine.inventory.getItemDetail(101)).to.have.property(
        "item",
        "Coco-Cola"
      );
    });

    it("Intial stage should be in Idle State", () => {
      expect(currentState).to.be.instanceOf(IdleState);
    });

    it("Inital Vault Money and Transaction Money should be Zero", () => {
      expect(vendingMachine.getVaultMoney()).equal(0);
      expect(vendingMachine.getTransactionMoney()).equal(0);
    });

    it("Switch to Accept Money State", () => {
      currentState.selectInsertMoney(vendingMachine);
      currentState = vendingMachine.state;
      expect(currentState).to.be.instanceOf(PaymentState);
    });

    it("Insert money in Vending Machine", () => {
      currentState.payment(vendingMachine, 50);
      expect(vendingMachine.getTransactionMoney()).equal(50);
    });

    it("Switch the Vending Machine status to Selection State", () => {
      currentState.selectProductSelection(vendingMachine);
      currentState = vendingMachine.state;
      expect(currentState).to.be.instanceOf(SelectionState);
    });

    it("Get the Wrong Code Selection Error", () => {
      try {
        currentState.chooseProduct(vendingMachine, 109);
      } catch (err) {
        expect(err.message).to("Wrong code selected");
      }
      //   expect(currentState.chooseProduct(vendingMachine, 109)).to.throw("Wrong code selected")
    });

    it("Finish the Product & Change Money", () => {
      expect(vendingMachine.getTransactionMoney()).equal(0);
      expect(vendingMachine.getVaultMoney()).equal(0);
    });

    it("The state should switch to Idle State", () => {
      currentState = vendingMachine.state;
      expect(currentState).to.be.instanceOf(IdleState);
    });
  });
});
