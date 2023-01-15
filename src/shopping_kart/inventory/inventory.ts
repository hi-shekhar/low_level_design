export interface ItemShelf {
  item: string;
  price: number;
  quantity: number;
  code: number;
}

export class Inventory {
  inventory: ItemShelf[] = [];
  constructor() {
    this.inventory = new Array(3);
    this.setUpInventory();
    this.displayInventory();
  }

  setUpInventory() {
    let code = 101;
    for (let i = 0; i < this.inventory.length; i++) {
      this.inventory[i] = {
        item: `item_${i}`,
        price: (i + 1) * 100,
        quantity: (i + 1) * 10,
        code: code + i,
      };
    }
  }

  selectProduct(code: number) {
    return this.inventory.find((item) => item.code === code);
  }

  buyaProduct(codes: number[]) {
    for (let i = 0; i < codes.length; i++) {
      const index = this.inventory.findIndex((item) => item.code === codes[i]);
      this.inventory[index].quantity -= 1;
    }
  }

  displayInventory() {
    console.log("\n**** Inventory Status ****\n")
    for (let i = 0; i < this.inventory.length; i++) {
      console.log(
        "Code :",
        this.inventory[i].code,
        " | Type : ",
        this.inventory[i].item.concat(" ".repeat(11 - this.inventory[i].item.length)),
        " | Price : ",
        this.inventory[i].price + " ".repeat(3 - this.inventory[i].price.toString().length),
        " | Quantity : ",
        this.inventory[i].quantity
      );
    }
    console.log("\n********\n")
  }
}
