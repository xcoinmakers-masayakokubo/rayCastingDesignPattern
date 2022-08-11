import * as util from "./util.class";

export class Player {
  constructor(p) {
    this.p = p;
    this.x = util.WINDOW_WIDTH / 2;
    this.y = util.WINDOW_HEIGHT / 7;
    this.radius = 4;
    this.turnDirection = 0; // -1 if left, +1 if right
    this.walkDirection = 0; // -1 if back, +1 if front
    this.rotationAngle = Math.PI / 2;
    this.moveSpeed = 4.0;
    this.rotationSpeed = 1 * (Math.PI / 180);
  }

  // update() {
  //   this.rotationAngle += this.turnDirection * this.rotationSpeed;

  //   var moveStep = this.walkDirection * this.moveSpeed;

  //   var newPlayerX = this.x + Math.cos(this.rotationAngle) * moveStep;
  //   var newPlayerY = this.y + Math.sin(this.rotationAngle) * moveStep;

  //   if (!grid.hasWallAt(newPlayerX, newPlayerY)) {
  //     this.x = newPlayerX;
  //     this.y = newPlayerY;
  //   }
  // }

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
    const i = 1;
    const j = 1;
    const tileX = j * util.TILE_SIZE;
    const tileY = i * util.TILE_SIZE;
    const tileColor = "#f00";

    this.p.stroke("#0f0");
    this.p.fill(tileColor);
    // this.p.rect(
    //   MINIMAP_SCALE_FACTOR * tileX,
    //   MINIMAP_SCALE_FACTOR * tileY,
    //   MINIMAP_SCALE_FACTOR * TILE_SIZE,
    //   MINIMAP_SCALE_FACTOR * TILE_SIZE
    // );
    this.p.rect(
      // MINIMAP_SCALE_FACTOR * tileX,
      // MINIMAP_SCALE_FACTOR * tileY,
      // MINIMAP_SCALE_FACTOR * TILE_SIZE,
      // MINIMAP_SCALE_FACTOR * TILE_SIZE
      tileX,
      tileY,
      util.TILE_SIZE,
      util.TILE_SIZE
    );
  }
}
