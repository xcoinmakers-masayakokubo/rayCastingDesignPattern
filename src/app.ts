import * as p5 from "p5";
import * as util from "./util.class";
import { TileService } from "./tile/tile_servie.class";
import { IMap } from "./map/map.interface";
import { MapFactory } from "./map/map_factory.class";

export class App {
  tileService: TileService;
  map: IMap;
  isGameOver = false;

  keyInput = { x: 0, y: 0 };
  rate = 0;

  constructor(private p: p5, public mapType: string) {
    this.map = MapFactory.create(mapType, p);
    this.tileService = new TileService(this.map.getTiles(p));
  }

  update() {
    this.rate++;

    try {
      if (!(this.rate % 10)) {
        this.tileService.updateEnemy();
      }

      if (this.rate % 2) {
        this.tileService.updatePlayer(this.keyInput);
      }
    } catch (e) {
      this.isGameOver = true;
    }

    if (this.rate === 10000) {
      this.rate = 0;
    }
  }

  draw() {
    if (this.isGameOver) {
      this.p.fill("#000");
      this.p.rect(
        0,
        0,
        util.TILE_SIZE * util.MAP_NUM_COLS,
        util.TILE_SIZE * util.MAP_NUM_ROWS
      );
      this.p.background(50);
      this.p.noStroke();
      this.p.fill(255);
      this.p.textSize(100);
      this.p.text(
        "Game Over",
        util.WINDOW_WIDTH / 5,
        util.WINDOW_HEIGHT / 2 + 50
      );
    } else {
      this.tileService.tiles
        .filter((e) => e.isDerty)
        .forEach((e) => {
          e.draw();
          e.clean();
        });
    }
  }
}
