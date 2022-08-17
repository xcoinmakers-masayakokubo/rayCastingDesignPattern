import { DefaultMap } from "./maps/default_map.class";
import { IMap } from "./map.interface";
import { PlainMap } from "./maps/plain_map.class";
import { MazeMap } from "./maps/maze_map.class";

const MAP_TYPE = {
  DEFAULT: "default",
  PLAIN: "plain",
  MAZE: "maze",
} as const;

export class MapFactory {
  static create(type: string): IMap {
    switch (type) {
      case MAP_TYPE.DEFAULT:
        return new DefaultMap();
      case MAP_TYPE.PLAIN:
        return new PlainMap();
      case MAP_TYPE.MAZE:
        return new MazeMap();
      default:
        throw new Error("Could not find map type.");
    }
  }
}
