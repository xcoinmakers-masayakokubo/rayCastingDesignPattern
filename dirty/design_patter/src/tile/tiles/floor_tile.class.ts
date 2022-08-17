import { IDrawer } from "../../drawer/adaptor/drawer.interface";
import { TILE } from "../../util.class";
import { Tile } from "./tile.class";

export class FloorTile extends Tile {
  constructor(public drawer: IDrawer, public x: number, public y: number) {
    super(drawer, TILE.FLOOR, x, y, "#fff");
  }
}
