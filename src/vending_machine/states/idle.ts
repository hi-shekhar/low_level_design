import { VendingMachine } from "../vendingMachine";
import { AcceptMoneyState } from "./acceptMoney";
import State from "./state";

export class IdleState implements State {
  constructor() {
    console.log("Machine is in idle state");
  }

  selectInsertMoney(machine: VendingMachine) {
    machine.state = new AcceptMoneyState();
  }

  selectProductSelection(machine: VendingMachine) {
    console.log("Idle state: I don't do product selection");
  }

  acceptMoney(machine: VendingMachine, money: number) {
    console.log("Idle state: I don't accept money");
  }

  chooseProduct(machine: VendingMachine, code: number): void {
    console.log("You need to pay first");
  }

  refundChange(machine: VendingMachine): void {
    console.log("You need to pay first");
  }

  dispenseProduct(machine: VendingMachine, code: number): void {
    console.log("You need to pay first");
  }

  cancelPurchase(machine: VendingMachine): void {
    console.log("You need to pay first");
  }

  refundAll(machine: VendingMachine): void {
    console.log("You need to pay first");
  }

  updateInventory(machine: VendingMachine): void {
    console.log("functionality pending");
  }
}
