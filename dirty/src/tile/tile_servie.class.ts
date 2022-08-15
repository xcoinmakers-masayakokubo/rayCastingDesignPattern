import { ITile } from "./tile.interface";
import { EnemyTile } from "./tiles/enemy_tile.class";
import { FloorTile } from "./tiles/floor_tile.class";
import { PlayerTile } from "./tiles/player_tile.class";
import * as util from "../util.class";

export class TileService {
  player: PlayerTile;
  enemy: EnemyTile;

  constructor(public tiles: ITile[]) {
    this.player = tiles.filter((e) => e instanceof PlayerTile)[0] as PlayerTile;
    this.enemy = tiles.filter((e) => e instanceof EnemyTile)[0] as EnemyTile;
  }

  updateEnemy() {
    const nextTileIndex = this.enemy.getNextIndex();
    const nextTile = this.tiles[nextTileIndex];

    if (nextTile instanceof FloorTile) {
      this.swap(this.enemy, nextTile);
    }

    if (nextTile instanceof PlayerTile) {
      throw new Error("Game Over");
    }
  }

  updatePlayer(keyInput: { x: number; y: number }) {
    const nextTileIndex = this.player.getIndex() + keyInput.x + keyInput.y * util.MAP_NUM_COLS;
    const nextTile = this.tiles[nextTileIndex];

    if (nextTile instanceof FloorTile) {
      this.swap(this.player, nextTile);
    }

    if (nextTile instanceof EnemyTile) {
      throw new Error("Game Over");
    }
  }

  swap(c: ITile, n: ITile) {
    const [px, py] = c.getCoordinate();
    const [npx, npy] = n.getCoordinate();

    n.update(px, py);
    c.update(npx, npy);

    const tmp = n;
    this.tiles[c.getIndex()] = this.tiles[n.getIndex()];
    this.tiles[n.getIndex()] = tmp;
  }
}
