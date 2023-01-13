import { Item } from "../inventory/item";
import { VendingMachine } from "../vendingMachine";
import { IdleState } from "./idle";
import State from "./state";

export class DispenseState implements State {
  constructor() {
    console.log("Machine is in Dispense state");
  }

  selectInsertMoney(machine: VendingMachine) {
    console.log("Dispense state: First finish your current selection");
  }

  selectProductSelection(machine: VendingMachine): void {
    console.log("Dispense state: Hey Buddy you already selecting a product")
  }

  acceptMoney(machine: VendingMachine, money: number) {
    console.log("Dispense state , Merko Paise nahi Mangta");
  }

  chooseProduct(machine: VendingMachine, code: number): void {
    console.log("Dispense state , Merko Paise nahi Mangta");
  }

  refundChange(machine: VendingMachine, money: number): void {
    machine.updateVaultMoney(money);
    console.log("Dispense Refund", money);
  }

  dispenseProduct(machine: VendingMachine, code: number, extraMoney: number): void {
    try {
      let product = machine.inventory.getItem(code) as Item;
      if(extraMoney > 0) {
        machine.state.refundChange(machine, extraMoney);
      }
      machine.updateTransactionMoney(-Math.abs(machine.getTransactionMoney()))
      console.log("Dispensing the product....", product.getType());
      machine.state = new IdleState();
    } catch(err) {
      console.log("Error ", err);
      machine.state.refundAll(machine);
    }
  }

  cancelPurchase(machine: VendingMachine): void {
    console.log("You need to pay first");
  }

  refundAll(machine: VendingMachine): void {
    console.log("Refunding All");
    machine.updateTransactionMoney(-machine.getTransactionMoney);
  }

  updateInventory(machine: VendingMachine): void {
    console.log("functionality pending");
  }
}
