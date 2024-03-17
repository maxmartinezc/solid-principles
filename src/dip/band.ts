import { IMusician } from "./musician.interface";

export class Band {
  constructor(
    private singer: IMusician,
    private guitarist: IMusician,
    private drummer: IMusician
  ) {}

  performMusic(): void {
    this.singer.play();
    this.guitarist.play();
    this.drummer.play();
  }
}
