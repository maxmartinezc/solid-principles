import { Drummer } from "./Drummer";
import { Guitarist } from "./Guitarist";
import { Singer } from "./Singer";

console.log("Running S.O.L.I.D: Open/Closed Principle");
// Creating instances of the musician
const singer = new Singer();
const guitarist = new Guitarist();
const drummer = new Drummer();

console.log("Using the play method on each instance of musician and thier");
singer.play();
guitarist.play();
drummer.play();

console.log("Using the own instrument-specific method");
singer.sing();
guitarist.playGuitar();
drummer.playDrum();
