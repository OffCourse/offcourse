export type CanvasContext = false | CanvasRenderingContext2D;
export interface IShapeProps {
  x: number;
  y: number;
  value: number;
  colors: string[];
  width: number;
  height: number;
  ctx: CanvasContext;
  interval: number;
  frame: number;
}

export interface ICanvasProps {
  width: number;
  height: number;
  delay?: number;
  colors?: string[];
}
