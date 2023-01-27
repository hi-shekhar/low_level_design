import { VendingMachine } from "../vendingMachine";

export default interface State {
  selectInsertMoney(machine: VendingMachine): void;
  selectProductSelection(machine: VendingMachine): void;
  payment(machine: VendingMachine, Money: number): void;
  chooseProduct(machine: VendingMachine, code: number): void;
  refundChange(machine: VendingMachine, money: number): void;
  dispenseProduct(machine: VendingMachine, code: number, money: number): void;
  cancelPurchase(machine: VendingMachine): void;
  refundAll(machine: VendingMachine): void;
  updateInventory(machine: VendingMachine): void;
}
