import { IAlgorithm } from "./algorithm.interface";

export class RandomAlgorithm implements IAlgorithm {
  getNextCordinate() {
    return [6, 2];
  }
}
