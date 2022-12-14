import * as p5 from "p5";
import * as util from "./util.class";
import { App } from "./app";

export const sketch = (p: p5) => {
  const setting = require("./setting.json");
  const app = new App(p, setting.type);

  p.setup = () => {
    p.createCanvas(util.WINDOW_WIDTH, util.WINDOW_HEIGHT);
  };

  p.draw = () => {
    app.update();
    app.draw();
  };

  p.keyPressed = () => {
    if (p.keyCode == p.UP_ARROW) {
      app.keyInput.y = -1;
    } else if (p.keyCode == p.DOWN_ARROW) {
      app.keyInput.y = 1;
    } else if (p.keyCode == p.RIGHT_ARROW) {
      app.keyInput.x = 1;
    } else if (p.keyCode == p.LEFT_ARROW) {
      app.keyInput.x = -1;
    }
  };

  p.keyReleased = () => {
    app.keyInput = { x: 0, y: 0 };
  };
};
