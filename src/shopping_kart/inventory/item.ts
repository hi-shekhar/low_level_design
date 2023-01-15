import { ItemTypes } from "./types";

export class Item {
  private _item: ItemTypes;
  private _price: number;
  
  getType(): ItemTypes {
    return this._item;
  }

  setType(item: ItemTypes) {
    this._item = item;
  }

  get price(): number {
    return this._price;
  }

  set price(price: number) {
    this._price = price
  }

}
