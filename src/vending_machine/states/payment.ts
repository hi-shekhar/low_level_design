import { VendingMachine } from "../vendingMachine";
import { SelectionState } from "./selection";
import State from "./state";

export class PaymentState implements State {
  constructor() {
    console.log("Machine is in Accept Money state");
  }

  selectInsertMoney(machine: VendingMachine) {
    console.log(`Accept Money State : I'm already accepting money`);
  }

  selectProductSelection(machine: VendingMachine): void {
    machine.state = new SelectionState();
  }

  payment(machine: VendingMachine, money: number): void {
    machine.updateTransactionMoney(money);
    console.log(`Accept Money State : Total Money Received = ${machine.getTransactionMoney()}`);
  }

  chooseProduct(machine: VendingMachine, code: number): void {
    console.log("Accept Money State : I'm not here to choose product");
  }

  refundChange(machine: VendingMachine): void {
    console.log("Accept Money State : I only accept Money");
  }

  dispenseProduct(machine: VendingMachine, code: number): void {
    console.log("Accept Money State :I only accept Money");
  }

  cancelPurchase(machine: VendingMachine): void {
    console.log("Accept Money State : I only accept Money");
  }

  refundAll(machine: VendingMachine): void {
    console.log("Accept Money State : I only accept Money");
  }

  updateInventory(machine: VendingMachine): void {
    console.log("Accept Money State : I only accept Money");
  }
}
