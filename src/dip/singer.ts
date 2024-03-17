import { IMusician } from "./musician.interface";

export class Singer implements IMusician {
  play(): void {
    console.log("Singing");
  }
}
