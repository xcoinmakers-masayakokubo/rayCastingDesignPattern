import { IAlgorithm } from "../../algorithm/algorithm.interface";
import { IDrawer } from "../../drawer/adaptor/drawer.interface";
import { TILE } from "../../util.class";
import { ITile } from "../tile.interface";
import { Tile } from "./tile.class";

export class EnemyTile extends Tile {
  constructor(
    public drawer: IDrawer,
    public x: number,
    public y: number,
    private algorithm: IAlgorithm
  ) {
    super(drawer, TILE.ENEMY, x, y, "#00F");
  }

  getNextIndex(tiles: ITile[]): number {
    return this.algorithm.getNextIndex(tiles);
  }
}
