import { useState, useRef } from "react";
import { ICanvasProps, CanvasContext } from "@offcourse/interfaces/src/canvas";

const useCanvas: (options: ICanvasProps) => [any, CanvasContext] = ({ width, height }) => {
  const canvasRef: any = useRef();
  const canvas = canvasRef.current;
  const [ctx, setCtx]: [CanvasContext, any] = useState(false);

  if (canvas && !ctx) {
    const context = canvas.getContext("2d");
    context.canvas.width = width;
    context.canvas.height = height;
    setCtx(context);
  }

  return [canvasRef, ctx];
};

export default useCanvas;
