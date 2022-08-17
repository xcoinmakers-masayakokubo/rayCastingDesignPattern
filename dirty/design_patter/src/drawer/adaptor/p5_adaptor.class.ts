import * as p5 from "p5";
import { IDrawer } from "./drawer.interface";
import { P5Adaptee } from "../adaptee/p5_adaptee.class";
import * as util from "../../util.class";

export class P5Adaptor implements IDrawer {
  adaptee: P5Adaptee;

  constructor(private p: p5) {
    this.adaptee = new P5Adaptee(p);
  }

  text(text: string, x: number, y: number, theSize: number, color: number, gray: number) {
    this.adaptee.background(gray);
    this.adaptee.noStroke();
    this.adaptee.fill(color);
    this.adaptee.textSize(theSize);
    this.adaptee.text(text, x, y);
  }

  tile(x: number, y: number, color: string) {
    this.p.fill(color);
    this.p.rect(x, y, util.TILE_SIZE, util.TILE_SIZE);
  }

  background(color: string) {
    this.adaptee.fill(color);
    this.adaptee.rect(0, 0, util.TILE_SIZE * util.MAP_NUM_COLS, util.TILE_SIZE * util.MAP_NUM_ROWS);
  }
}
