import AirCondition from "./car_feature/air_condition";
import SportMode from "./car_feature/sport_mode";
import HatchBack from "./hatchback";
// import Suv from "./suv";

let hatchBack = new HatchBack();
// let suv = new Suv();

console.log(hatchBack.getDescription());
console.log(hatchBack.getMileage());

let sportMode = new SportMode(hatchBack);
console.log(sportMode.getDescription());
console.log(sportMode.getMileage());

let acOn = new AirCondition(sportMode);
console.log(acOn.getDescription());
console.log(acOn.getMileage());

console.log(hatchBack.getMileage());