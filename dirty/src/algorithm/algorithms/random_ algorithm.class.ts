import { IAlgorithm } from "../algorithm.interface";
import * as util from "../../util.class";

export class RandomAlgorithm implements IAlgorithm {
  getNextIndex(currentIndex: number) {
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
