import { Inventory } from "./inventory/inventory";
import { IdleState } from "./states/idle";
import State from "./states/state";

export class VendingMachine {
  private _state: State;
  private _vaultMoney: number = 0;
  private _transactionMoney: number = 0;
  inventory: Inventory;
  constructor(shelfCount: number) {
    console.log("\n***************START********************");
    console.log("Starting the Vending Machine");
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

}