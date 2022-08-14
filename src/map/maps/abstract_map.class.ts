import { FloorTile } from "../../tile/tiles/floor_tile.class";
import { PlayerTile } from "../../tile/tiles/player_tile.class";
import { ITile } from "../../tile/tile.interface";
import { MAP_NUM_COLS, TILE } from "../../util.class";
import { IMap } from "../map.interface";
import { WallTile } from "../../tile/tiles/wall_tile.class copy";
import { EnemyTile } from "../../tile/tiles/enemy_tile.class";
import * as p5 from "p5";

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

  getTiles(p: p5): ITile[] {
    return this.grid
      .reduce((p, n) => [...p, ...n])
      .map((e, i) => {
        const x: number = i % MAP_NUM_COLS;
        const y: number = Math.floor(i / MAP_NUM_COLS);

        switch (e) {
          case TILE.FLOOR:
            return new FloorTile(p, x, y);
          case TILE.WALL:
            return new WallTile(p, x, y);
          case TILE.PLAYER:
            return new PlayerTile(p, x, y);
          case TILE.ENEMY_R:
            return new EnemyTile(p, x, y, TILE.ENEMY_R);
          case TILE.ENEMY_A:
            return new EnemyTile(p, x, y, TILE.ENEMY_A);
          default:
            throw new Error("error");
        }
      });
  }
}
