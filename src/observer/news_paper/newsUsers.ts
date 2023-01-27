import { Observable } from "./observable";
import { Observer } from "./observer";
import { v4 as uuidv4 } from "uuid";

export default class NewsUsers implements Observer {
  observable: Observable;
  id: number;
  constructor(obs: Observable) {
    this.observable = obs;
    this.id = uuidv4();
  }

  update(): void {
    console.log(`user id : ${this.id} updated`);
  }
}

// export class device_2 implements Observer, displayElements {
//   observable: Observable;
//   id: number;
//   constructor(obs: Observable) {
//     this.observable = obs;
//     this.id = uuidv4();
//   }

//   update(): void {
//     console.log("display_1 update called");
//   }

//   display(): void {
//     console.log("update_1 display called");
//   }
// }
