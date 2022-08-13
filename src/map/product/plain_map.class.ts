import * as p5 from "p5";
import * as util from "../../util.class";
import { AbstractMap } from "./abstract_map.class";

export class PlainMap extends AbstractMap {
  grid: number[][];

  constructor(private p: p5) {
    super();

    this.grid = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];
  }

  // hasWallAt(x, y) {
  //   if (x < 0 || x > WINDOW_WIDTH || y < 0 || y > WINDOW_HEIGHT) {
  //     return true;
  //   }
  //   var mapGridIndexX = Math.floor(x / TILE_SIZE);
  //   var mapGridIndexY = Math.floor(y / TILE_SIZE);
  //   return this.grid[mapGridIndexY][mapGridIndexX] != 0;
  // }

  // getWallContentAt(x, y) {
  //   if (x < 0 || x > WINDOW_WIDTH || y < 0 || y > WINDOW_HEIGHT) {
  //     return 0;
  //   }
  //   var mapGridIndexX = Math.floor(x / TILE_SIZE);
  //   var mapGridIndexY = Math.floor(y / TILE_SIZE);
  //   return this.grid[mapGridIndexY][mapGridIndexX];
  // }

  render() {
    for (var i = 0; i < util.MAP_NUM_ROWS; i++) {
      for (var j = 0; j < util.MAP_NUM_COLS; j++) {
        const tileX = j * util.TILE_SIZE;
        const tileY = i * util.TILE_SIZE;
        const tileColor = this.grid[i][j] != 0 ? "#222" : "#fff";

        this.p.stroke("#222");
        this.p.fill(tileColor);
        this.p.rect(tileX, tileY, util.TILE_SIZE, util.TILE_SIZE);
      }
    }
  }
}
