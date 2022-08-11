import * as p5 from "p5";
import { DefaultMap } from "./map/default_map.class";
import { IMap } from "./map/imap.class";
import { MapFactory } from "./map/map_factory.class";
import { Player } from "./player.class";
import * as util from "./util.class";

export const sketch = (p: p5) => {
  // let map: IMap;
  let player: Player;
  const setting = require("./setting.json");
  const map = MapFactory.create(setting.type, p);

  let isSetting = true;

  p.keyPressed = () => {
    if (p.keyCode == p.UP_ARROW) {
      player.walkDirection = -1;
    } else if (p.keyCode == p.DOWN_ARROW) {
      player.walkDirection = +1;
    } else if (p.keyCode == p.RIGHT_ARROW) {
      player.turnDirection = +1;
    } else if (p.keyCode == p.LEFT_ARROW) {
      player.turnDirection = -1;
    }

    player.update(map);
  };

  p.keyReleased = () => {
    if (p.keyCode == p.UP_ARROW) {
      player.walkDirection = 0;
    } else if (p.keyCode == p.DOWN_ARROW) {
      player.walkDirection = 0;
    } else if (p.keyCode == p.RIGHT_ARROW) {
      player.turnDirection = 0;
    } else if (p.keyCode == p.LEFT_ARROW) {
      player.turnDirection = 0;
    }
  };

  p.setup = () => {
    p.createCanvas(util.WINDOW_WIDTH, util.WINDOW_HEIGHT);

    // map = new DefaultMap(p);
    player = new Player(p);
  };

  p.draw = () => {
    // player.update();

    if (isSetting) {
      map.render();
      player.render();
    }
  };
};
