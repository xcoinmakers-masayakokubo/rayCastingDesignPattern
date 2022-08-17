export const TILE_SIZE = 64;

export const MAP_NUM_ROWS = 11;
export const MAP_NUM_COLS = 15;

export const WINDOW_WIDTH = MAP_NUM_COLS * TILE_SIZE;
export const WINDOW_HEIGHT = MAP_NUM_ROWS * TILE_SIZE;

export const TILE = {
  FLOOR: 0,
  WALL: 1,
  PLAYER: 2,
  ENEMY: 3,
} as const;

export const MAP_TYPE = {
  DEFAULT: "default",
  PLAIN: "plain",
  MAZE: "maze",
} as const;
