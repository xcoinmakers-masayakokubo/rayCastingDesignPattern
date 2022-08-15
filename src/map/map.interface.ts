import { IDrawer } from "../drawer/adaptor/drawer.interface";
import { ITile } from "../tile/tile.interface";

export interface IMap {
  getTiles(drawer: IDrawer): ITile[];
}
