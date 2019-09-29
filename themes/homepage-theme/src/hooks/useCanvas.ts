import { useState, useRef } from "react";

type UseCanvasOptions = {
  width: number;
  height: number;
}

const useCanvas: (options: UseCanvasOptions) => any = ({
  width, height
}) => {
  const canvasRef: any = useRef();
  const canvas = canvasRef.current;
  const [ctx, setCtx]: [boolean | any, any] = useState(false)

  if (canvas && !ctx) {
    const context = canvas.getContext("2d");
    context.canvas.width = width;
    context.canvas.height = height;
    setCtx(context);
  }

  return [canvasRef, ctx];
}

export default useCanvas;
