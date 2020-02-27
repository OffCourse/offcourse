import { useState, useCallback } from "react";
import { useAnimatedCanvas } from "@offcourse/hooks";
import generateGrid from "./helpers";
import { GridCell } from "@offcourse/interfaces/src";
import { DrawGrid } from "@offcourse/interfaces/src/canvas";

const drawGrid: DrawGrid = ({ ctx, width, height, grid, colors, shape }) => {
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
};

const useAnimatedGridCanvas = ({ width, height, unitSize, colors, shape }) => {
  const [grid, setGrid] = useState<GridCell[]>([]);

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D) =>
      drawGrid({ ctx, width, height, grid, colors, shape }),
    [width, height, grid, colors, shape]
  );

  const callback = useCallback(
    async (frame: number) => {
      const nextGrid = await generateGrid({
        frame,
        width,
        height,
        unitSize
      });
      setGrid(nextGrid);
    },
    [width, unitSize, height]
  );

  return useAnimatedCanvas({ width, height, draw, callback });
};

export { useAnimatedGridCanvas };
