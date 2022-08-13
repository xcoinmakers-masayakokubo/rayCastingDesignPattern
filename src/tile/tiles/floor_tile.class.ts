import { TILE } from "../../util.class";
import { Tile } from "./tile.class";

export class FloorTile extends Tile {
  constructor(public x: number, public y: number) {
    super(TILE.FLOOR, x, y, "#fff");
  }
}
