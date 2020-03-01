import { RefObject } from "react";
export type CanvasContext = false | CanvasRenderingContext2D;

export interface IShapeProps {
  x: number;
  y: number;
  value: number;
  colors: string[];
  width: number;
  height: number;
  ctx: CanvasContext;
  interval?: number;
  frame?: number;
}

export type Shape = (args: IShapeProps) => void;

export interface ICanvasProps {
  width: number;
  height: number;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

export type AnimatedCanvasProps = ICanvasProps & {
  callback: (frame: number) => void;
};

export type GridCell = {
  u: number;
  v: number;
  width: number;
  height: number;
  value: number;
};
export type DrawGrid = (
  args: ICanvasProps & {
    ctx: CanvasRenderingContext2D;
    shape: Shape;
    grid: GridCell[];
  }
) => void;

export type GridProps = (
  args: ICanvasProps & { shape: Shape; elements: any[] }
) => RefObject<HTMLCanvasElement>;

