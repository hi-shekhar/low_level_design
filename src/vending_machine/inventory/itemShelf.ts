import { Item } from "./item";
import { ShelfItem } from "./types";

export class ItemShelf {
  _code: number;
  items: Item[];
  maxQuantity: number;

  constructor() {
    this.maxQuantity = 10;
    this.items = [];
  }

  getShelfDetail(): ShelfItem {
    return this.items.length > 0
      ? {
          item: this.items[0].getType(),
          price: this.items[0].price,
          quantity: this.items.length,
        }
      : {
          item: undefined,
          price: undefined,
          quantity: this.items.length,
        };
  }

  getItem(): Item {
    if (this.items.length > 0) {
      return this.items.shift();
    }
    throw new Error("Sold Out");
  }

  addItem(item: Item): void | Error {
    if (this.items.length < this.maxQuantity) {
      this.items.push(item);
    } else {
      new Error("Shelf is full");
    }
  }

  get code(): number {
    return this._code;
  }

  set code(code: number) {
    this._code = code;
  }

  isSoldOut(): boolean {
    return this.items.length === 0 ? true : false;
  }

  getItemQuantity(): number {
    return this.items.length;
  }
}
