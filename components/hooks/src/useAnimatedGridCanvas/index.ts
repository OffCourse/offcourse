import { useState, useCallback, RefObject } from "react";
import useAnimatedCanvas from "../useAnimatedCanvas";
import { GridCell } from "@offcourse/interfaces/src";

const useAnimatedGridCanvas: (args: any) => RefObject<HTMLCanvasElement> = ({
  width,
  height,
  colors,
  shape,
  generateGrid
}) => {
  const [grid, setGrid] = useState<GridCell[]>([]);

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

  const callback = useCallback(
    async (frame: number) => {
      const nextGrid = await generateGrid(frame);
      setGrid(nextGrid);
    },
    [generateGrid]
  );

  const ref = useAnimatedCanvas({ width, height, draw, callback });
  return ref;
};

export default useAnimatedGridCanvas;
