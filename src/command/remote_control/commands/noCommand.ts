import Command from "./command";

export default class NoCommand implements Command {
  execute(): void {}
  undo(): void {}
}
