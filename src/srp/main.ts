import { Drummer } from "./Drummer";
import { Guitarist } from "./Guitarist";
import { Singer } from "./Singer";

console.log("Running S.O.L.I.D: Single Responsibility Principle");
// Creating instances of each musician
const singer = new Singer();
const guitarist = new Guitarist();
const drummer = new Drummer();

singer.sing();
guitarist.play();
drummer.play();
