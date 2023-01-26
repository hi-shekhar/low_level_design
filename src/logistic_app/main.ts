import RoadLogistic from "./roadLogistic";
import SeaLogistic from "./seaLogistic";

let logistic_1 = new RoadLogistic();
let transport_1 = logistic_1.createTransport();
transport_1.deliver();

let logistic_2 = new SeaLogistic();
let transport_2 = logistic_2.createTransport();
transport_2.deliver();

