import { useCallback, RefObject } from "react";
import useGridCanvas from "../useGridCanvas";
import useAnimationFrame from "../useAnimationFrame";
import useComputationWorker from "../useComputationWorker";
import { IDimensions, Shape } from "@offcourse/interfaces/src"; // @ts-ignore
// @ts-ignore
import workerFn from "../../workers/grid.worker";

type CanvasProps = IDimensions & {
  shape: Shape;
  colors: string[];
  unitSize: number;
};

const useAnimatedGridCanvas: (
  args: CanvasProps
) => RefObject<HTMLCanvasElement> = ({
  width,
  height,
  unitSize,
  colors,
  shape
}) => {
  const [grid, elementsWorker] = useComputationWorker(workerFn);

  const callback = useCallback(
    (frame: number) => {
      if (elementsWorker) {
        const payload = JSON.stringify({
          frame,
          numberOfElements: 1000,
          unitSize,
          width,
          height
        });
        elementsWorker.postMessage(payload);
      }
    },
    [unitSize, width, height, elementsWorker]
  );

  useAnimationFrame({ callback, delay: 1000 });

  return useGridCanvas({ width, shape, unitSize, grid, colors, height });
};

export default useAnimatedGridCanvas;
