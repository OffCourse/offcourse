import SimplexNoise from "simplex-noise";
import useCanvas from "@offcourse/homepage-theme/src/hooks/useCanvas";
import useShape from "@offcourse/homepage-theme/src/hooks/useShape";
import { ICanvasProps } from "@offcourse/interfaces/src/canvas";
import { bin, sum } from "d3-array";

const simplex = new SimplexNoise();

const useAnimatedGrid: (args: ICanvasProps & { shapeName: string, elements: any[] }) => any = ({
  width,
  height,
  shapeName,
  elements,
  colors,
}) => {
  const [ref, ctx] = useCanvas({ width, height });
  const shape = useShape(shapeName);

  const unitSize = 30;
  const numberOfColumns = Math.ceil(width / unitSize);
  const numberOfRows = Math.ceil(height / unitSize);
  const xbin = bin().domain([0, 1]).thresholds(numberOfColumns).value(({ u, v }) => u);
  const ybin = bin().domain([0, 1]).thresholds(numberOfRows).value(({ u, v }) => v)
  if (!ctx || !shape) {
    return ref;
  }

  const cols = xbin(elements);
  const binnedElements = cols.map(col => {
    const cells = ybin(col);
    return cells.map(cell => {
      const u = col.x0;
      const v = cell.x0;
      const width = col.x1 - col.x0;
      const height = cell.x1 - cell.x0;
      const value = sum(cell, c => c.value) / cell.length;
      return { u, v, width, height, value: value || 0 };
    });
  })

  const grid = binnedElements.flat();
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
  return ref;
}

export default useAnimatedGrid;
