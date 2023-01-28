import Command from "./commands/command";
import NoCommand from "./commands/noCommand";

export default class RemoteControl {
  onCommands: Command[];
  offCommands: Command[];
  undoCommand: Command;
  // noCommands: NoCommand;

  constructor() {
    this.onCommands = new Array<Command>(2);
    this.offCommands = new Array<Command>(2);
    // example of a null object
    let noCommands = new NoCommand();
    for (let i = 0; i < 2; i++) {
      this.onCommands[i] = noCommands;
      this.offCommands[i] = noCommands;
    }
    this.undoCommand = noCommands;
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command) {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  doPressOnButton(slot: number) {
    this.onCommands[slot].execute();
    this.undoCommand = this.onCommands[slot];
  }

  doPressOffButton(slot: number) {
    this.offCommands[slot].execute();
    this.undoCommand = this.offCommands[slot];
  }

  doPressUndo() {
    this.undoCommand.undo();
  }
}
