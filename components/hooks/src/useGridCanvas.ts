import { useCallback, RefObject } from "react";
import useCanvas from "./useCanvas";
// @ts-ignore
/**
import workerize from "workerize";

const worker =
  typeof window === "object" &&
  workerize(`export function add(a, b) {
  // block for half a second to demonstrate asynchronicity
  const start = Date.now();
  while (Date.now() - start < 500);
  return a + b;
}
`);
**/

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

  const ref = useCanvas({ width, height, draw });
  return ref;
};

export default useGridCanvas;

