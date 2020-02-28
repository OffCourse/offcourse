import { useEffect, useRef, RefObject } from "react";

type useCanvas = (args: {
  width: number;
  height: number;
  draw: (args: CanvasRenderingContext2D) => void;
}) => RefObject<HTMLCanvasElement>;

const useCanvas: useCanvas = ({ width, height, draw }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.canvas.width = width;
        ctx.canvas.height = height;
        draw(ctx);
      }
    }
  }, [canvasRef, width, height, draw]);
  return canvasRef;
};

export default useCanvas;

