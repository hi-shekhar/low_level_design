import { Observable } from "./observable";
import { Observer } from "./observer";

export default class NewsPublication implements Observable {
  subscribers: Observer[];
  constructor() {
    this.subscribers = [];
  }
  addClient(obs: Observer): void {
    this.subscribers.push(obs);
  }
  removeClient(obs: Observer): void {
    let index = this.subscribers.findIndex((elem) => elem.id === obs.id);
    if (index !== -1) {
      this.subscribers.splice(index, 1);
    }
  }

  notifyClient(): void {
    for (let i = 0; i < this.subscribers.length; i++) {
      this.subscribers[i].update();
    }
  }
}
