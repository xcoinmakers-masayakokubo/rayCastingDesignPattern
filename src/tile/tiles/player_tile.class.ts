import { TILE } from "../../util.class";
import { Tile } from "./tile.class";

export class PlayerTile extends Tile {
  constructor(public x: number, public y: number) {
    super(TILE.PLAYER, x, y, "#f00");
  }
}
