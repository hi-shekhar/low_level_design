import { expect } from "chai";
import RemoteControl from "./../../../src/command/remote_control/remote_controler";
import Light from "./../../../src/command/remote_control/receiver/light";
import Garage from "./../../../src/command/remote_control/receiver/garage";
import {
  GarageCloseCommand,
  GarageOpenCommand,
} from "./../../../src/command/remote_control/commands/garage";
import {
  LightOffCommand,
  LightOnCommand,
} from "./../../../src/command/remote_control/commands/light";
import * as sinon from "sinon";

describe("Test the Remote Control", () => {
  let remoteControl: RemoteControl;
  let light: Light;
  let garage: Garage;
  let lightOn: LightOnCommand;
  let lightOff: LightOffCommand;
  let garageOpen: GarageOpenCommand;
  let garageClosed: GarageCloseCommand;

  before(() => {
    remoteControl = new RemoteControl();
    light = new Light();
    garage = new Garage();
    lightOn = new LightOnCommand(light);
    lightOff = new LightOffCommand(light);
    garageOpen = new GarageOpenCommand(garage);
    garageClosed = new GarageCloseCommand(garage);
  });

  it("Set the lightOn & lightOff command for slot 0", () => {
    remoteControl.setCommand(0, lightOn, lightOff);
    expect(remoteControl.offCommands[0]).to.be.instanceOf(LightOffCommand);
    expect(remoteControl.onCommands[0]).to.be.instanceOf(LightOnCommand);
  });

  it("Set the garage command for slot 1", () => {
    remoteControl.setCommand(1, garageOpen, garageClosed);
    expect(remoteControl.offCommands[1]).to.be.instanceOf(GarageCloseCommand);
    expect(remoteControl.onCommands[1]).to.be.instanceOf(GarageOpenCommand);
  });

  it("Set the garage command for slot 1", () => {
    remoteControl.setCommand(1, garageOpen, garageClosed);
    expect(remoteControl.offCommands[1]).to.be.instanceOf(GarageCloseCommand);
    expect(remoteControl.onCommands[1]).to.be.instanceOf(GarageOpenCommand);
  });

  it("On the light", () => {
    let spyLightOnExecute = sinon.spy(lightOn, "execute");
    remoteControl.doPressOnButton(0);
    expect(spyLightOnExecute.calledOnce).to.be.true;
    spyLightOnExecute.restore();
    console.log(remoteControl.undoCommand);
  });

  it("Off the light", () => {
    let spyLightOffExecute = sinon.spy(lightOff, "execute");
    remoteControl.doPressOffButton(0);
    expect(spyLightOffExecute.calledOnce).to.be.true;
    spyLightOffExecute.restore();
  });

  it("Undo the light", () => {
    let spyLightOffUndo = sinon.spy(lightOff, "undo");
    remoteControl.doPressUndo();
    expect(spyLightOffUndo.calledOnce).to.be.true;
    spyLightOffUndo.restore();
  });
});
