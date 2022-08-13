import * as p5 from "p5";
import * as util from "./util.class";
import { ITile } from "./tile/tile.interface";
import { Player } from "./archive/player.class";
import { PlayerTile } from "./tile/tiles/player_tile.class";

export class App {
  player: PlayerTile;
  keyInput = { x: 0, y: 0 };

  constructor(private p: p5, public tiles: ITile[]) {
    this.player = tiles.filter((e) => e instanceof PlayerTile)[0] as PlayerTile;
  }

  update() {
    //
  }

  draw() {
    this.tiles
      .filter((e) => e.isDerty)
      .forEach((e) => {
        const [x, y] = e.getTileCoordinate();

        this.p.fill(e.color);
        this.p.rect(x, y, util.TILE_SIZE, util.TILE_SIZE);

        e.update();
      });
  }
}
