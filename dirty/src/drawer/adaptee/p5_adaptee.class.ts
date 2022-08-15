import * as p5 from "p5";

export class P5Adaptee {
  constructor(private p: p5) {}

  fill(color: string): void;
  fill(color: number): void;

  fill(color: any) {
    this.p.fill(color);
  }

  rect(x: number, y: number, w: number, h: number) {
    this.p.rect(x, y, w, h);
  }

  background(gray: number) {
    this.p.background(gray);
  }

  noStroke() {
    this.p.noStroke();
  }

  textSize(theSize: number) {
    this.p.textSize(theSize);
  }

  text(str: string, x: number, y: number) {
    this.p.text(str, x, y);
  }
}
