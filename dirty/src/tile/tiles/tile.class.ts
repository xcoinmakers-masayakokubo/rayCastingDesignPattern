import { ITile } from "../tile.interface";
import { TILE_TYPE } from "../type/tile_type";
import * as util from "../../util.class";
import * as p5 from "p5";

export abstract class Tile implements ITile {
  isDerty = true;

  constructor(
    public p: p5,
    public type: TILE_TYPE,
    public x: number,
    public y: number,
    public color: string
  ) {}

  update(x: number, y: number) {
    this.isDerty = !this.isDerty;
    this.x = x;
    this.y = y;
  }

  draw() {
    const [x, y] = this.getTileCoordinate();
    this.p.fill(this.color);
    this.p.rect(x, y, util.TILE_SIZE, util.TILE_SIZE);
  }

  clean() {
    this.isDerty = false;
  }

  getCoordinate() {
    return [this.x, this.y];
  }

  getTileCoordinate() {
    return [this.x * util.TILE_SIZE, this.y * util.TILE_SIZE];
  }

  getIndex() {
    return this.y * util.MAP_NUM_COLS + this.x;
  }
}
