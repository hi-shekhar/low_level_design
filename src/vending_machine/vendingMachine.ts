import { Inventory } from "./inventory/inventory";
import { Item } from "./inventory/item";
import { IdleState } from "./states/idle";
import State from "./states/state";

export class VendingMachine {
  private _state: State;
  private _vaultMoney: number = 0;
  private _transactionMoney: number = 0;
  private _shelfCount: number;
  inventory: Inventory;
  constructor(shelfCount: number) {
    console.log("\n***************START********************");
    console.log("Starting the Vending Machine");
    this._shelfCount = shelfCount;
    this.inventory = new Inventory(shelfCount);
    this.state = new IdleState();
    console.log("\n***************************************\n");
  }

  get state(): State {
    return this._state;
  }

  set state(state: State) {
    this._state = state;
  }

  getVaultMoney(): number {
    return this._vaultMoney;
  }

  updateVaultMoney(amount) {
    this._vaultMoney += amount;
  }

  getTransactionMoney(): number {
    return this._transactionMoney;
  }

  updateTransactionMoney(amount): void {
    this._transactionMoney += amount;
  }

  addItemsToInventory() {
    // 2 shelves for Kinley and 1 shelf for other items
    for (let i = 0; i < this._shelfCount; i++) {
      let shelfCode = 101;
      let item = new Item();
      switch (i) {
        case 0:
          item.setType("Coco-Cola");
          item.price = 40;
          this.inventory.addItem(item, shelfCode + i, 10);
          break;
        case 1:
          item.setType("Fanta");
          item.price = 40;
          this.inventory.addItem(item, shelfCode + i, 10);
          break;
        case 2:
          item.setType("Minute Maid");
          item.price = 30;
          this.inventory.addItem(item, shelfCode + i, 10);
          break;
        case 3:
          item.setType("Thumbs Up");
          item.price = 15;
          this.inventory.addItem(item, shelfCode + i, 10);
          break;
        case 4:
        case 5:
          item.setType("Kinley");
          item.price = 20;
          this.inventory.addItem(item, shelfCode + i, 10);
          break;
      }
    }
  }

  displayInventory() {
    let inventories = this.inventory.inventory;
    console.log("\n************** Inventory Status **************\n")
    for (let i = 0; i < inventories.length; i++) {
      console.log(
        "Code :",
        inventories[i].code,
        " | Type : ",
        inventories[i].getShelfDetail().item.concat(" ".repeat(11 - inventories[i].getShelfDetail().item.length)),
        " | Price : ",
        inventories[i].getShelfDetail().price + " ".repeat(3 - inventories[i].getShelfDetail().price.toString().length),
        " | Quantity : ",
        inventories[i].getShelfDetail().quantity
      );
    }
    console.log("***************************************************")
  }

  displayWallet() {
    console.log("\n*****Vending Machine Wallet****\n");
    console.log("Vault Money : ", this.getVaultMoney(), "Transaction Money : ", this.getTransactionMoney());
  }
}
