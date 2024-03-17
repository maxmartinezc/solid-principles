import { Band } from "./band";
import { Drummer } from "./drummer";
import { Guitarist } from "./guitarist";
import { Singer } from "./singer";

console.log("Running S.O.L.I.D: Dependency Injection Principle");
const band = new Band(new Singer(), new Guitarist(), new Drummer());

console.log("The band is performing a show");
band.performMusic();
