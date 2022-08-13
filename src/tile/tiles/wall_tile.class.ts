import { TILE } from "../../util.class";
import { Tile } from "./tile.class";

export class WallTile extends Tile {
  constructor(public x: number, public y: number) {
    super(TILE.WALL, x, y, "#222");
  }
}
