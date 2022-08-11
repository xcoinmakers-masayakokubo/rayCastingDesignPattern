import { Ball } from "./sample/Ball";
import { Map } from "./class/map.class";
import { Player } from "./class/player.class";

const TILE_SIZE = 64;
const MAP_NUM_ROWS = 11;
const MAP_NUM_COLS = 15;

const WINDOW_WIDTH = MAP_NUM_COLS * TILE_SIZE;
const WINDOW_HEIGHT = MAP_NUM_ROWS * TILE_SIZE;

const FOV_ANGLE = 60 * (Math.PI / 180);

const WALL_STRIP_WIDTH = 8;
const NUM_RAYS = WINDOW_WIDTH / WALL_STRIP_WIDTH;

const MINIMAP_SCALE_FACTOR = 0.3;

export const sketch = (p) => {
  let ball;
  let map;
  let player;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);

    // var player = new Player();
    // var rays = [];

    map = new Map(p);
    player = new Player(p);

    // ball = new Ball(
    //   p,
    //   p.createVector(p.windowWidth / 2, p.windowHeight / 2),
    //   p.createVector(10, -20),
    //   50,
    //   10
    // );
  };

  p.draw = () => {
    // p.background("#0f2350");
    // ball.applyForce(p.createVector(0, 9.8));
    // ball.run();

    map.render();
    player.render();

    // function draw() {
    //   background("#111");
    //   update();

    //   render3DProjectedWalls();

    //   grid.render();
    //   for (ray of rays) {
    //     ray.render();
    //   }
    //   player.render();
    // }
  };
};
