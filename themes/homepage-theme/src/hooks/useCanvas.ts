import { useState, useEffect, useRef } from "react";
import useAnimationFrame from "./useAnimationFrame";

interface ICanvasDrawOptions {
  ctx: any;
  primaryColor: string;
  secondaryColor: string;
}

type UseCanvasOptions = {
  width: number;
  height: number;
  delay?: number;
  theme: any;
  grid: any[],
  unitSize: number,
  draw: (options: ICanvasDrawOptions) => void
}

const initializeCanvas = ({ canvas, width, height }) => {
  const context = canvas.getContext("2d");
  context.canvas.width = width;
  context.canvas.height = height;
  return context;
}

let frame = 0;

const updateCanvas = ({ time, ctx, theme, draw, unitSize, grid }) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  draw({
    frame: frame + 1,
    ctx,
    unitSize,
    grid,
    theme
  });
}

const useCanvas: (options: UseCanvasOptions) => any = ({
  width, height, draw, delay, theme, grid, unitSize
}) => {
  const canvasRef: any = useRef();
  const canvas = canvasRef.current;
  const [ctx, setCtx] = useState(false)

  if (canvas && !ctx) {
    setCtx(initializeCanvas({ canvas, width, height }));
  }

  const noop = () => null;
  const animate = (time: number) => updateCanvas({
    ctx,
    time,
    theme,
    draw,
    unitSize,
    grid
  });

  useAnimationFrame({ callback: ctx && draw ? animate : noop, delay });

  return canvasRef;
}

export default useCanvas;
