import { ITile } from "../tile/tile.interface";

export interface IAlgorithm {
  getNextIndex(tile: ITile[]): number;
}
