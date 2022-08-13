import * as p5 from "p5";
import * as util from "./util.class";
import { ITile } from "./tile/tile.interface";
import { PlayerTile } from "./tile/tiles/player_tile.class";
import { WallTile } from "./tile/tiles/wall_tile.class";
import { FloorTile } from "./tile/tiles/floor_tile.class";

export class App {
  player: PlayerTile;
  keyInput = { x: 0, y: 0 };

  constructor(private p: p5, public tiles: ITile[]) {
    this.player = tiles.filter((e) => e instanceof PlayerTile)[0] as PlayerTile;
  }

  update() {
    const nextTileIndex =
      this.player.getIndex() +
      this.keyInput.x +
      this.keyInput.y * util.MAP_NUM_COLS;
    const nextTile = this.tiles[nextTileIndex];

    if (nextTile instanceof FloorTile) {
      const [px, py] = this.player.getCoordinate();
      const [npx, npy] = [nextTile.x, nextTile.y];

      nextTile.update(px, py);
      this.player.update(npx, npy);

      this.swap(this.player, nextTile);
    }
  }

  swap(c: ITile, n: ITile) {
    const tmp = n;
    this.tiles[c.getIndex()] = this.tiles[n.getIndex()];
    this.tiles[n.getIndex()] = tmp;
  }

  draw() {
    this.tiles
      .filter((e) => e.isDerty)
      .forEach((e) => {
        const [x, y] = e.getTileCoordinate();

        this.p.fill(e.color);
        this.p.rect(x, y, util.TILE_SIZE, util.TILE_SIZE);

        e.clean();
      });
  }
}
