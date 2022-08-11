// import { Map } from "./map.class";

// function normalizeAngle(angle) {
//   angle = angle % (2 * Math.PI);
//   if (angle < 0) {
//     angle = 2 * Math.PI + angle;
//   }
//   return angle;
// }

// function keyPressed() {
//   if (keyCode == UP_ARROW) {
//     player.walkDirection = +1;
//   } else if (keyCode == DOWN_ARROW) {
//     player.walkDirection = -1;
//   } else if (keyCode == RIGHT_ARROW) {
//     player.turnDirection = +1;
//   } else if (keyCode == LEFT_ARROW) {
//     player.turnDirection = -1;
//   }
// }

// function keyReleased() {
//   if (keyCode == UP_ARROW) {
//     player.walkDirection = 0;
//   } else if (keyCode == DOWN_ARROW) {
//     player.walkDirection = 0;
//   } else if (keyCode == RIGHT_ARROW) {
//     player.turnDirection = 0;
//   } else if (keyCode == LEFT_ARROW) {
//     player.turnDirection = 0;
//   }
// }

// function castAllRays() {
//   // start first ray subtracting half of the FOV
//   var rayAngle = player.rotationAngle - FOV_ANGLE / 2;

//   // empty array of rays
//   rays = [];

//   // loop all columns casting the rays
//   for (var col = 0; col < NUM_RAYS; col++) {
//     var ray = new Ray(rayAngle);
//     ray.cast();
//     rays.push(ray);
//     rayAngle += FOV_ANGLE / NUM_RAYS;
//   }
// }
// function renderCeiling() {
//   noStroke();
//   fill("#414141");
//   rect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT / 2);
// }

// function renderFloor() {
//   noStroke();
//   fill("#818181");
//   rect(0, WINDOW_HEIGHT / 2, WINDOW_WIDTH, WINDOW_HEIGHT);
// }

// function render3DProjectedWalls() {
//   renderCeiling();
//   renderFloor();

//   // loop every ray in the array of rays
//   for (var i = 0; i < NUM_RAYS; i++) {
//     var ray = rays[i];

//     // get the perpendicular distance to the wall to fix fishbowl distortion
//     var correctWallDistance =
//       ray.distance * Math.cos(ray.rayAngle - player.rotationAngle);

//     // calculate the distance to the projection plane
//     var distanceProjectionPlane = WINDOW_WIDTH / 2 / Math.tan(FOV_ANGLE / 2);

//     // projected wall height
//     var wallStripHeight =
//       (TILE_SIZE / correctWallDistance) * distanceProjectionPlane;

//     // set a darker color if the wall is facing north-south
//     var colorBrightness = ray.wasHitVertical ? 255 : 200;

//     // set the correct color based on the wall hit grid content (1=Red, 2=Green, 3=Blue)
//     var colorR = ray.hitWallColor == 1 ? colorBrightness : 0;
//     var colorG = ray.hitWallColor == 2 ? colorBrightness : 0;
//     var colorB = ray.hitWallColor == 3 ? colorBrightness : 0;
//     var alpha = 1.0;

//     fill("rgba(" + colorR + ", " + colorG + ", " + colorB + ", " + alpha + ")");
//     noStroke();

//     // render a rectangle with the calculated projected wall height
//     rect(
//       i * WALL_STRIP_WIDTH,
//       WINDOW_HEIGHT / 2 - wallStripHeight / 2,
//       WALL_STRIP_WIDTH,
//       wallStripHeight
//     );
//   }
// }

// // function normalizeAngle(angle) {
// //   angle = angle % (2 * Math.PI);
// //   if (angle < 0) {
// //     angle = 2 * Math.PI + angle;
// //   }
// //   return angle;
// // }

// function distanceBetweenPoints(x1, y1, x2, y2) {
//   return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
// }

// function setup() {
//   createCanvas(WINDOW_WIDTH, WINDOW_HEIGHT);
// }

// function update() {
//   player.update();
//   castAllRays();
// }

import p5 from "p5";
import { sketch } from "./sketch.js";

document.body.style.margin = "0";

const app = new p5(sketch, document.body);
