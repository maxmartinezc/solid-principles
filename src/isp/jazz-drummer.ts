import { IDrummer } from "./Drummer";

export class JazzDrummer implements IDrummer {
  playDrums(): void {
    console.log("Playing jazz drum beats");
  }
}
