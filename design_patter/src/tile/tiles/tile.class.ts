import { ITile } from "../tile.interface";
import { TILE_TYPE } from "../type/tile_type";
import * as util from "../../util.class";
import { IDrawer } from "../../drawer/adaptor/drawer.interface";

export abstract class Tile implements ITile {
  isDerty = true;

  constructor(
    public drawer: IDrawer,
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
    this.drawer.tile(x, y, this.color);
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
