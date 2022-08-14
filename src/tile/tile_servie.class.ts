import { ITile } from "./tile.interface";
import { EnemyTile } from "./tiles/enemy_tile.class";
import { FloorTile } from "./tiles/floor_tile.class";
import { PlayerTile } from "./tiles/player_tile.class";
import * as util from "../util.class";

export class TileService {
  player: PlayerTile;
  enemies: EnemyTile[];

  constructor(public tiles: ITile[]) {
    this.player = tiles.filter((e) => e instanceof PlayerTile)[0] as PlayerTile;
    this.enemies = tiles.filter((e) => e instanceof EnemyTile) as EnemyTile[];
  }

  updatePlayer(keyInput: { x: number; y: number }) {
    const nextTileIndex =
      this.player.getIndex() + keyInput.x + keyInput.y * util.MAP_NUM_COLS;
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
}
