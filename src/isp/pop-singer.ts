import { ISinger } from "./Singer";

export class PopSinger implements ISinger {
  sing(): void {
    console.log("Singing catchy pop melodies");
  }
}
