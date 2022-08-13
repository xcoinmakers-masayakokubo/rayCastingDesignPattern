import * as p5 from "p5";
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
  static create(type: string, p: p5): IMap {
    switch (type) {
      case MAP_TYPE.DEFAULT:
        return new DefaultMap(p);
      case MAP_TYPE.PLAIN:
        return new PlainMap(p);
      case MAP_TYPE.MAZE:
        return new MazeMap(p);
      default:
        throw new Error("Could not find map type.");
    }
  }
}
