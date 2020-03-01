import { useState, useCallback, RefObject } from "react";
import useGridCanvas from "../useGridCanvas";
import useAnimationFrame from "../useAnimationFrame";
import useComputationWorker from "../useComputationWorker";
import { GridCell, IDimensions, Shape } from "@offcourse/interfaces/src";
// @ts-ignore
import workerFn from "../../workers/elements.worker";

type CanvasProps = IDimensions & {
  shape: Shape;
  colors: string[];
  generateGrid: any;
};

const useAnimatedGridCanvas: (
  args: CanvasProps
) => RefObject<HTMLCanvasElement> = ({
  width,
  height,
  colors,
  shape,
  generateGrid
}) => {
  const [grid, setGrid] = useState<GridCell[]>([]);
  const [elements, elementsWorker] = useComputationWorker(workerFn);
  const callback = useCallback(
    async (frame: number) => {
      if (elementsWorker) {
        elementsWorker.postMessage(frame);
        const nextGrid = await generateGrid(elements);
        setGrid(nextGrid);
      }
    },
    [elements, generateGrid, elementsWorker]
  );

  useAnimationFrame({ callback, delay: 1000 });

  return useGridCanvas({ width, shape, colors, height, grid });
};

export default useAnimatedGridCanvas;
