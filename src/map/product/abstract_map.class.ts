import * as p5 from "p5";
import { Player } from "../../player.class";
import { PLAYER } from "../../util.class";
import { IMap } from "../imap.class";

export abstract class AbstractMap implements IMap {
  grid: number[][];

  constructor() {
    this.grid = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
      [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];
  }

  isFloor(x: number, y: number) {
    return this.grid[y][x] == 0;
  }

  getPlayerCoordinate() {
    let y = 0;
    let x;

    for (let i = 0; i < this.grid.length; i++) {
      if (this.grid[i].includes(PLAYER)) {
        y = i;
        break;
      }
    }

    x = this.grid[y].indexOf(PLAYER);

    return [x, y];
  }

  abstract render(): void;
}
