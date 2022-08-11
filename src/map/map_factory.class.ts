import * as p5 from "p5";
import { DefaultMap } from "./default_map.class";
import { IMap } from "./imap.class";

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
      case MAP_TYPE.MAZE:
      default:
        throw new Error("Could not find map type.");
    }
  }
}
