import { FloorTile } from "../../tile/tiles/floor_tile.class";
import { PlayerTile } from "../../tile/tiles/player_tile.class";
import { ITile } from "../../tile/tile.interface";
import { MAP_NUM_COLS, TILE } from "../../util.class";
import { IMap } from "../map.interface";
import { WallTile } from "../../tile/tiles/wall_tile.class copy";
import { EnemyTile } from "../../tile/tiles/enemy_tile.class";
import { IDrawer } from "../../drawer/adaptor/drawer.interface";
// import { RandomAlgorithm } from "../../algorithm/algorithms/random_ algorithm.class";
import { BfsAlgorithm } from "../../algorithm/algorithms/bfs_algorithm.class";
import { RandomAlgorithm } from "../../algorithm/algorithms/random_ algorithm.class";

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

  getTiles(drawer: IDrawer): ITile[] {
    return this.grid
      .reduce((p, n) => [...p, ...n])
      .map((e, i) => {
        const x: number = i % MAP_NUM_COLS;
        const y: number = Math.floor(i / MAP_NUM_COLS);

        switch (e) {
          case TILE.FLOOR:
            return new FloorTile(drawer, x, y);
          case TILE.WALL:
            return new WallTile(drawer, x, y);
          case TILE.PLAYER:
            return new PlayerTile(drawer, x, y);
          case TILE.ENEMY:
            return new EnemyTile(drawer, x, y, new RandomAlgorithm());
          // return new EnemyTile(drawer, x, y, new BfsAlgorithm());
          default:
            throw new Error("error");
        }
      });
  }

  copy() {
    return this.grid.map((e) => [...e]);
  }
}
