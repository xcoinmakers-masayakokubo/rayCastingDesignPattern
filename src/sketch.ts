import * as p5 from "p5";
import { Enemy } from "./enemy.class";
import { MapFactory } from "./map/map_factory.class";
import { Player } from "./player.class";
import * as util from "./util.class";

export const sketch = (p: p5) => {
  const setting = require("./setting.json");
  const map = MapFactory.create(setting.type, p);

  const [px, py] = map.getPlayerCoordinate();
  const player = new Player(p, px, py);

  const enemy = new Enemy(p);

  p.setup = () => {
    p.createCanvas(util.WINDOW_WIDTH, util.WINDOW_HEIGHT);
  };

  p.draw = () => {
    player.update(map);

    map.render();
    player.render();
    enemy.render();
  };

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
};
