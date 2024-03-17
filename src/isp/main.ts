import { JazzDrummer } from "./jazz-drummer";
import { PopSinger } from "./pop-singer";
import { RockGuitarist } from "./rock-guitarist";

console.log("Running S.O.L.I.D: Interface Segregation Principle");

console.log("Let's play music");
const popSinger = new PopSinger();
popSinger.sing();

const rockGuitarist = new RockGuitarist();
rockGuitarist.playGuitar();

const jazzDrummer = new JazzDrummer();
jazzDrummer.playDrums();
