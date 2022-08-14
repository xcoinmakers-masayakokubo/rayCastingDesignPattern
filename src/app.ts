import * as p5 from "p5";
import * as util from "./util.class";
import { ITile } from "./tile/tile.interface";
import { TileService } from "./tile/tile_servie.class";
import { IMap } from "./map/map.interface";
import { MapFactory } from "./map/map_factory.class";

export class App {
  tileService: TileService;
  map: IMap;

  keyInput = { x: 0, y: 0 };
  playerRate = 0;

  constructor(private p: p5, public mapType: string) {
    this.map = MapFactory.create(mapType, p);
    this.tileService = new TileService(this.map.getTiles(p));
  }

  update() {
    this.playerRate++;

    if (this.playerRate > 1) {
      this.playerRate = 0;
      this.tileService.updatePlayer(this.keyInput);
    }
  }

  draw() {
    this.tileService.tiles
      .filter((e) => e.isDerty)
      .forEach((e) => {
        e.draw();
        e.clean();
      });
  }
}
