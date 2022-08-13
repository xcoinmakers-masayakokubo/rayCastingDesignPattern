import { ITile } from "../tile/tile.interface";

export interface IMap {
  // render(): void;
  // isFloor(x: number, y: number): boolean;
  // getPlayerCoordinate(): number[];
  getTiles(): ITile[];
}
