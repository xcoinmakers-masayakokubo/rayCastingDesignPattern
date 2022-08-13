import { FloorTile } from "../../tile/tiles/floor_tile.class";
import { PlayerTile } from "../../tile/tiles/player_tile.class";
import { ITile } from "../../tile/tile.interface";
import { WallTile } from "../../tile/tiles/wall_tile.class";
import { MAP_NUM_COLS, TILE } from "../../util.class";
import { IMap } from "../map.interface";

export abstract class AMap implements IMap {
  grid: number[][];

  constructor() {
    this.grid = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
      [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];
  }

  getTiles(): ITile[] {
    return this.grid
      .reduce((p, n) => [...p, ...n])
      .map((e, i) => {
        const x: number = i % MAP_NUM_COLS;
        const y: number = Math.floor(i / MAP_NUM_COLS);

        switch (e) {
          case TILE.FLOOR:
            return new FloorTile(x, y);
          case TILE.WALL:
            return new WallTile(x, y);
          case TILE.PLAYER:
            return new PlayerTile(x, y);
          default:
            throw new Error("error");
        }
      });
  }
}
