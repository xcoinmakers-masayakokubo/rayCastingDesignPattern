import * as p5 from "p5";
import { IMap } from "./map/imap.class";
import * as util from "./util.class";

export class Player {
  turnDirection = 0; // -1 if left, +1 if right
  walkDirection = 0; // -1 if back, +1 if front
  x = 1;
  y = 1;

  constructor(private p: p5) {
    // this.x = util.WINDOW_WIDTH / 2;
    // this.y = util.WINDOW_HEIGHT / 7;
    // this.radius = 4;
    // this.rotationAngle = Math.PI / 2;
    // this.moveSpeed = 4.0;
    // this.rotationSpeed = 1 * (Math.PI / 180);
  }

  update(map: IMap) {
    // this.rotationAngle += this.turnDirection * this.rotationSpeed;
    // var moveStep = this.walkDirection * this.moveSpeed;
    // var newPlayerX = this.x + Math.cos(this.rotationAngle) * moveStep;
    // var newPlayerY = this.y + Math.sin(this.rotationAngle) * moveStep;
    // if (!grid.hasWallAt(newPlayerX, newPlayerY)) {
    //   this.x = newPlayerX;
    //   this.y = newPlayerY;
    // }
    const newX = this.x + this.turnDirection;
    const newY = this.y + this.walkDirection;
    if (map.isFloor(newX, newY)) {
      this.x = newX;
      this.y = newY;
    }
  }

  render() {
    // this.p.noStroke();
    // this.p.fill("blue");
    // this.p.circle(
    //   MINIMAP_SCALE_FACTOR * this.x,
    //   MINIMAP_SCALE_FACTOR * this.y,
    //   MINIMAP_SCALE_FACTOR * this.radius
    // );
    // this.p.stroke("blue");
    // this.p.line(
    //   MINIMAP_SCALE_FACTOR * this.x,
    //   MINIMAP_SCALE_FACTOR * this.y,
    //   MINIMAP_SCALE_FACTOR * (this.x + Math.cos(this.rotationAngle) * 30),
    //   MINIMAP_SCALE_FACTOR * (this.y + Math.sin(this.rotationAngle) * 30)
    // );

    const tileX = this.x * util.TILE_SIZE;
    const tileY = this.y * util.TILE_SIZE;
    const tileColor = "#f00";

    this.p.stroke("#0f0");
    this.p.fill(tileColor);
    this.p.rect(tileX, tileY, util.TILE_SIZE, util.TILE_SIZE);
  }
}
