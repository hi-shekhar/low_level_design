import { Item } from "./inventory/item";
import { VendingMachine } from "./vendingMachine";

const SHELF_COUNT = 6;
let vendingMachine = new VendingMachine(SHELF_COUNT);
addItemsToInventory();
console.log("\n***** Inventory ******\n")
displayInventory();
console.log("\n***** Inventory ******\n")

let currentState = vendingMachine.state;
currentState.selectInsertMoney(vendingMachine);
currentState = vendingMachine.state;
currentState.acceptMoney(vendingMachine, 20);
currentState.acceptMoney(vendingMachine, 20);
currentState.selectProductSelection(vendingMachine);
currentState = vendingMachine.state;
currentState.chooseProduct(vendingMachine, 107);
console.log("Vending Machine state ", currentState)
displayInventory();
displayWallet();

function addItemsToInventory() {
  // 2 shelves for Kinley and 1 shelf for other items
  for (let i = 0; i < SHELF_COUNT; i++) {
    let shelfCode = 101;
    let item = new Item();
    switch (i) {
      case 0:
        item.setType("Coco-Cola");
        item.price = 40;
        vendingMachine.inventory.addItem(item, shelfCode + i, 10);
        break;
      case 1:
        item.setType("Fanta");
        item.price = 40;
        vendingMachine.inventory.addItem(item, shelfCode + i, 10);
        break;
      case 2:
        item.setType("Minute Maid");
        item.price = 30;
        vendingMachine.inventory.addItem(item, shelfCode + i, 10);
        break;
      case 3:
        item.setType("Thumbs Up");
        item.price = 15;
        vendingMachine.inventory.addItem(item, shelfCode + i, 10);
        break;
      case 4:
      case 5:
        item.setType("Kinley");
        item.price = 20;
        vendingMachine.inventory.addItem(item, shelfCode + i, 10);
        break;
    }
  }
}

function displayInventory() {
  let inventories = vendingMachine.inventory.inventory;
  console.log("\n**** Inventory Status ****\n")
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
  console.log("\n********\n")
}


function displayWallet() {
  console.log("\n*****Vending Machine Wallet****\n");
  console.log("Vault Money : ", vendingMachine.getVaultMoney(), "Transaction Money : ", vendingMachine.getTransactionMoney());
}