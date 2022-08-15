import * as p5 from "p5";
import { IMap } from "../map/map.interface";
import * as util from "../util.class";

export class Enemy {
  turnDirection = 0; // -1 if left, +1 if right
  walkDirection = 0; // -1 if back, +1 if front
  x = 13;
  y = 9;

  constructor(private p: p5) {}

  update(map: IMap) {
    // const newX = this.x + this.turnDirection;
    // const newY = this.y + this.walkDirection;
    // if (map.isFloor(newX, newY)) {
    //   this.x = newX;
    //   this.y = newY;
    // }
  }

  render() {
    const tileX = this.x * util.TILE_SIZE;
    const tileY = this.y * util.TILE_SIZE;
    const tileColor = "#00f";

    this.p.fill(tileColor);
    this.p.rect(tileX, tileY, util.TILE_SIZE, util.TILE_SIZE);
  }
}
