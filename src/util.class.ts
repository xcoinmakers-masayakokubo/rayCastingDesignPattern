export const TILE_SIZE = 64;

export const MAP_NUM_ROWS = 11;
export const MAP_NUM_COLS = 15;

export const WINDOW_WIDTH = MAP_NUM_COLS * TILE_SIZE;
export const WINDOW_HEIGHT = MAP_NUM_ROWS * TILE_SIZE;

export const TILE = {
  FLOOR: 0,
  WALL: 1,
  PLAYER: 2,
  ENEMY_R: 3,
  ENEMY_A: 4,
} as const;

// const FOV_ANGLE = 60 * (Math.PI / 180);

// const NUM_RAYS = WINDOW_WIDTH / WALL_STRIP_WIDTH;

// const MINIMAP_SCALE_FACTOR = 0.3;

// const WALL_STRIP_WIDTH = 8;
