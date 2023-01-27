import { Item } from "./item";
import { ItemShelf } from "./itemShelf";
import { ShelfItem } from "./types";

export class Inventory {
  inventory: ItemShelf[] = [];

  constructor(shelfCount: number) {
    this.inventory = new Array(shelfCount);
    this.setUpInventory();
  }

  getInventory(): ItemShelf[] {
    return this.inventory;
  }

  updateInventory() {}

  setUpInventory() {
    let shelfCode = 101;
    for (let i = 0; i < this.inventory.length; i++) {
      let shelf: ItemShelf = new ItemShelf();
      shelf._code = shelfCode;
      this.inventory[i] = shelf;
      shelfCode++;
    }
    // console.log("Inventory setup complete ", this.inventory);
  }

  addItem(item: Item, code: number, quantity: number) {
    let selectedInventory = this.inventory.find((item) => item._code === code);
    for (let i = 0; i < quantity; i++) {
      try {
        selectedInventory.addItem(item);
      } catch (err) {
        console.log("Error ", err);
      }
    }
  }

  getItem(code: number): Item {
    return this.getItemOrDetail(code, false) as Item;
  }

  getItemDetail(code: number): ShelfItem {
    return this.getItemOrDetail(code, true) as ShelfItem;
  }

  private getItemOrDetail(code: number, detail: boolean): Item | ShelfItem {
    let selectedInventory = this.inventory.find((item) => item._code === code);
    if(selectedInventory  && !selectedInventory.isSoldOut()) {
      return detail ? selectedInventory.getShelfDetail() : selectedInventory.getItem();
    } else if(!selectedInventory) {
      throw new Error("Wrong code selected");
    } else if(selectedInventory.isSoldOut) {
      throw new Error("Item Sold Out"); 
    } else {
      throw new Error("Not able to dispense Item");
    }
  }
}
