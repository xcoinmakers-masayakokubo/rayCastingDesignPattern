export interface IDrawer {
  text(text: string, x: number, y: number, theSize: number, color: number, gray: number): void;
  tile(x: number, y: number, color: string): void;
  background(color: string): void;
}
