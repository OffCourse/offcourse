import { useCallback, RefObject } from "react";
import useCanvas from "./useCanvas";
// @ts-ignore
import workerFn from "../../workers/grid.worker";

const useGridCanvas: (args: any) => RefObject<HTMLCanvasElement> = ({
  width,
  height,
  colors,
  shape,
  grid
}) => {
  const draw = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      ctx.clearRect(0, 0, width, height);
      for (const { u, v, width: w, height: h, value } of grid) {
        const x = u * width;
        const y = v * height;
        shape({
          ctx,
          x,
          y,
          value,
          colors,
          width: Math.ceil(w * width),
          height: Math.ceil(h * height)
        });
      }
    },
    [width, height, grid, colors, shape]
  );

  return useCanvas({ width, height, draw });
};

export default useGridCanvas;

