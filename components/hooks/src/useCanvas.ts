import { useState, useRef } from "react";
import { CanvasContext } from "@offcourse/interfaces/src/canvas";

const useCanvas: (options: {
  width: number;
  height: number;
}) => [any, CanvasContext] = ({ width, height }) => {
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
