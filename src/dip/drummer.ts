import { IMusician } from "./musician.interface";

export class Drummer implements IMusician {
  play(): void {
    console.log("Playing drums");
  }
}
