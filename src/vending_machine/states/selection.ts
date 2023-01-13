import { ShelfItem } from "../inventory/types";
import { VendingMachine } from "../vendingMachine";
import { DispenseState } from "./dispense";
import { IdleState } from "./idle";
import State from "./state";

export class SelectionState implements State {
  constructor() {
    console.log("Machine is in selection state");
  }

  selectInsertMoney(machine: VendingMachine) {
    console.log("Selection state: First finish your current selection");
  }

  selectProductSelection(machine: VendingMachine): void {
    console.log("Selection state: Hey Buddy you already selecting a product")
  }

  acceptMoney(machine: VendingMachine, money: number) {
    console.log("Selection state , Merko Paise nahi Mangta");
  }

  chooseProduct(machine: VendingMachine, code: number): void {
    try {
      // get the product availability 
        let itemDetail = machine.inventory.getItemDetail(code);
        let extraMoney = machine.getTransactionMoney() - itemDetail.price;

      // Check if dispense can happen ?
        if(itemDetail.quantity > 0 && extraMoney >= 0) {
          machine.state = new DispenseState();
          machine.state.dispenseProduct(machine, code, extraMoney);
        } else {
          if(extraMoney < 0) {
            throw Error(`You are short of ${Math.abs(extraMoney)}`)
          }

          if(itemDetail.quantity < 0) {
            throw Error(`Sorry ! The Item is not on the shelf`);
          }
        }
    } catch(err) {
      // refund all
      console.log("!!! Error ", err.message);
      machine.state.refundAll(machine);
    } 
  }

  refundChange(machine: VendingMachine): void {
    console.log("You need to pay first");
  }

  dispenseProduct(machine: VendingMachine, code: number): void {
    console.log("You need to pay first");
  }

  cancelPurchase(machine: VendingMachine): void {
    console.log("Refund started...");
    machine.state.refundAll(machine);
  }

  refundAll(machine: VendingMachine): void {
    console.log("Refund Amount : ", machine.getTransactionMoney());
    machine.updateTransactionMoney(-Math.abs(machine.getTransactionMoney()));
    machine.state = new IdleState();
  }

  updateInventory(machine: VendingMachine): void {
    console.log("functionality pending");
  }
}
