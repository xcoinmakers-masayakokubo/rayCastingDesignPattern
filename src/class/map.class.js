import * as util from "./util.class";

export class Map {
  constructor(p) {
    this.p = p;
    this.grid = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 1, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 1],
      [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1],
      [1, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 3, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 3, 1],
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
        this.p.rect(
          // MINIMAP_SCALE_FACTOR * tileX,
          // MINIMAP_SCALE_FACTOR * tileY,
          // MINIMAP_SCALE_FACTOR * TILE_SIZE,
          // MINIMAP_SCALE_FACTOR * TILE_SIZE
          tileX,
          tileY,
          util.TILE_SIZE,
          util.TILE_SIZE
        );
      }
    }
  }
}
