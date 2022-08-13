export interface IMap {
  render(): void;
  isFloor(x: number, y: number): boolean;
  getPlayerCoordinate(): number[];
}
