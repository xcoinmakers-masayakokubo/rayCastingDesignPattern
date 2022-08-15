import * as p5 from "p5";
import { IMap } from "../map/map.interface";
import * as util from "../util.class";

export class Player {
  turnDirection = 0;
  walkDirection = 0;

  constructor(private p: p5, private x: number, private y: number) {}

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
    // if (map.isFloor(newX, newY)) {
    //   this.x = newX;
    //   this.y = newY;
    // }
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

    this.p.fill(tileColor);
    this.p.rect(tileX, tileY, util.TILE_SIZE, util.TILE_SIZE);
  }
}
