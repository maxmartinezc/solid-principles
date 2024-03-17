import { IGuitarist } from "./Guitarist";

export class RockGuitarist implements IGuitarist {
  playGuitar(): void {
    console.log("Playing electric guitar in a rock band");
  }
}
