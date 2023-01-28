import { GarageCloseCommand, GarageOpenCommand } from "./commands/garage";
import { LightOffCommand, LightOnCommand } from "./commands/light";
import Garage from "./receiver/garage";
import Light from "./receiver/light";
import RemoteControl from "./remote_controler";

let remote = new RemoteControl();
let light = new Light();
let garage = new Garage();

let lightOn = new LightOnCommand(light);
let lightOff = new LightOffCommand(light);
let garageOpen = new GarageOpenCommand(garage);
let garageClosed = new GarageCloseCommand(garage);

remote.setCommand(0, lightOn, lightOff);
remote.setCommand(1, garageOpen, garageClosed);


remote.doPressOffButton(1);
remote.doPressUndo();

