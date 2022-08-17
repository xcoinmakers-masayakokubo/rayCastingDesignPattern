import * as p5 from "p5";
import { ALGORITHM_TYPE, MAP_NUM_COLS, MAP_NUM_ROWS, TILE } from "../../util.class";
import { ITile } from "../tile.interface";
import { Tile } from "./tile.class";

export class EnemyTile extends Tile {
  constructor(public p: p5, public x: number, public y: number) {
    super(p, TILE.ENEMY, x, y, "#00F");
  }

  getNextIndex(type: string, tiles: ITile[]): number {
    if (ALGORITHM_TYPE.BFS === type) {
      return this.doBfs(tiles);
    } else {
      return this.random(tiles);
    }
  }

  doBfs(tiles: ITile[]): number {
    const currentIndex = tiles.find((e) => e.type === TILE.ENEMY)?.getIndex();
    if (currentIndex === undefined) throw new Error();

    const [y, x] = this.bfs(tiles);

    return x + y * MAP_NUM_COLS;
  }

  bfs(tiles: ITile[]) {
    const tg = tiles.find((e) => e.type === TILE.ENEMY)?.getCoordinate();
    const ts = tiles.find((e) => e.type === TILE.PLAYER)?.getCoordinate();
    if (tg == undefined || ts == undefined) throw new Error();

    const g = [tg[1], tg[0]];
    const s = [ts[1], ts[0]];

    const d = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
    const queue = [];
    const h = MAP_NUM_ROWS;
    const w = MAP_NUM_COLS;
    const min = [...Array(h)].map((_) => [...Array(w)].fill(-1));

    queue.push(s);
    min[s[0]][s[1]] = 0;
    while (queue.length > 0) {
      const p: number[] | undefined = queue.shift();

      if (p === undefined) break;
      if (p[0] === g[0] && p[1] === g[1]) break;

      for (let i = 0; i < d.length; i++) {
        const ny: number = p[0] + d[i][0];
        const nx: number = p[1] + d[i][1];

        if (ny < 0 || w <= nx) continue;
        if (nx < 0 || h <= ny) continue;
        if (tiles[ny * MAP_NUM_COLS + nx].type === TILE.WALL) continue;
        if (min[ny][nx] !== -1) continue;

        queue.push([ny, nx]);
        min[ny][nx] = min[p[0]][p[1]] + 1;
      }
    }

    let mm = 100;
    let f = [0, 0];
    for (const e of d) {
      const v = min[g[0] + e[0]][g[1] + e[1]];

      if (v == -1) continue;
      if (v < mm) {
        mm = v;
        f = [g[0] + e[0], g[1] + e[1]];
      }
    }

    return f;
  }

  random(tiles: ITile[]) {
    const currentIndex = tiles.find((e) => e.type === TILE.ENEMY)?.getIndex();
    if (currentIndex === undefined) throw new Error();

    const randomNumber = Math.floor(Math.random() * 4);
    let x, y;

    if (randomNumber === 0) {
      [x, y] = [0, -1];
    } else if (randomNumber === 1) {
      [x, y] = [1, 0];
    } else if (randomNumber === 2) {
      [x, y] = [0, 1];
    } else if (randomNumber === 3) {
      [x, y] = [-1, 0];
    } else {
      [x, y] = [0, 0];
    }

    return currentIndex + x + y * MAP_NUM_COLS;
  }
}
