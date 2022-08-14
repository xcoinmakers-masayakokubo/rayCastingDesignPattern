import * as p5 from "p5";
import { IAlgorithm } from "../../algorithm/algorithms/algorithm.interface";
import { RandomAlgorithm } from "../../algorithm/algorithms/random_ algorithm.class";
import { TILE } from "../../util.class";
import { ENEMY_TYPE } from "../type/enemy_type";
import { Tile } from "./tile.class";

export class EnemyTile extends Tile {
  algorithm: IAlgorithm;

  constructor(
    public p: p5,
    public x: number,
    public y: number,
    public type: ENEMY_TYPE
  ) {
    super(p, type, x, y, "#00F");

    if (type == TILE.ENEMY_A) {
      this.algorithm = new RandomAlgorithm();
    } else if (type == TILE.ENEMY_R) {
      this.algorithm = new RandomAlgorithm();
    } else {
      throw new Error("error");
    }
  }

  getNextIndex(): number {
    return this.algorithm.getNextIndex(this.getIndex());
  }
}
