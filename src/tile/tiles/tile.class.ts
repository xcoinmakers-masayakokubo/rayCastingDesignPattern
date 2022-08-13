import { ITile } from "../tile.interface";
import { TYLE_TYPE } from "../type";
import * as util from "../../util.class";

export abstract class Tile implements ITile {
  isDerty = true;

  constructor(
    public type: TYLE_TYPE,
    public x: number,
    public y: number,
    public color: string
  ) {}

  update() {
    this.isDerty = !this.isDerty;
  }

  getTileCoordinate() {
    return [this.x * util.TILE_SIZE, this.y * util.TILE_SIZE];
  }
}
