import { Observer } from "./observer";

export interface Observable {
    addClient(obs: Observer): void;
    removeClient(obs: Observer): void;
    notifyClient(): void;
}