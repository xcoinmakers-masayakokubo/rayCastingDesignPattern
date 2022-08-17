import { IAlgorithm } from "../algorithm.interface";
import * as util from "../../util.class";
import { TILE } from "../../util.class";
import { ITile } from "../../tile/tile.interface";

export class RandomAlgorithm implements IAlgorithm {
  getNextIndex(tiles: ITile[]) {
    const currentIndex = tiles.find((e) => e.type === TILE.ENEMY)?.getIndex();
    if (currentIndex === undefined) throw new Error();

    const randomNumber = Math.floor(Math.random() * 4);
    let x, y;

    if (randomNumber === 0) {
      [x, y] = [0, -1];
    } else if (randomNumber === 1) {
      [x, y] = [1, 0];
    } else if (randomNumber === 2) {
      [x, y] = [0, 1];
    } else if (randomNumber === 3) {
      [x, y] = [-1, 0];
    } else {
      [x, y] = [0, 0];
    }

    return currentIndex + x + y * util.MAP_NUM_COLS;
  }
}
