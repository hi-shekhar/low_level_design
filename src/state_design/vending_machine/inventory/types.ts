export type ItemTypes =
  | "Coco-Cola"
  | "Thumbs Up"
  | "Fanta"
  | "Minute Maid"
  | "Kinley";

export interface ShelfItem {
  item: ItemTypes | undefined;
  price: number | undefined;
  quantity: number;
}
