import * as p5 from "p5";
import { TILE } from "../../util.class";
import { Tile } from "./tile.class";

export class WallTile extends Tile {
  constructor(public p: p5, public x: number, public y: number) {
    super(p, TILE.WALL, x, y, "#222");
  }
}
