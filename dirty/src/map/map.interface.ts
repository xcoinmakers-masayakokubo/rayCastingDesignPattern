import * as p5 from "p5";
import { ITile } from "../tile/tile.interface";

export interface IMap {
  getTiles(p: p5): ITile[];
}
