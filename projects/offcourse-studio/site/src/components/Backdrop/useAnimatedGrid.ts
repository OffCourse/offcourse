import { useCanvas } from "@offcourse/hooks";
import { GridProps } from "@offcourse/interfaces/src/canvas";
import { calcGrid, drawGrid } from "./helpers";

const useAnimatedGrid: GridProps = ({
  width,
  height,
  shape,
  elements,
  colors
}) => {
  const [ref, ctx] = useCanvas({ width, height });
  if (!ctx || !shape) {
    return ref;
  }
  const unitSize = 20;
  const numberOfColumns = Math.ceil(width / unitSize);
  const numberOfRows = Math.ceil(height / unitSize);
  const grid = calcGrid({ numberOfColumns, numberOfRows, elements });
  drawGrid({ ctx, width, height, grid, colors, shape });
  return ref;
};

export default useAnimatedGrid;
