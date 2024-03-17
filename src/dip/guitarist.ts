import { IMusician } from "./musician.interface";

export class Guitarist implements IMusician {
  play(): void {
    console.log("Playing guitar");
  }
}
