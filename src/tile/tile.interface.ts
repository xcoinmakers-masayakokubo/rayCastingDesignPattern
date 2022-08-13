export interface ITile {
  isDerty: boolean;
  color: string;
  update(): void;
  getTileCoordinate(): number[];
}
