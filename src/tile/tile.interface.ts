import { TILE_TYPE } from "./type";

export interface ITile {
  isDerty: boolean;
  color: string;
  x: number;
  y: number;
  type: TILE_TYPE;
  update(x: number, y: number): void;
  clean(): void;
  getCoordinate(): number[];
  getTileCoordinate(): number[];
  getIndex(): number;
}
