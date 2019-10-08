import SimplexNoise from "simplex-noise";
import useCanvas from "@offcourse/homepage-theme/src/hooks/useCanvas";
import useShape from "@offcourse/homepage-theme/src/hooks/useShape";
import { ICanvasProps } from "@offcourse/interfaces/src/canvas";
import { bin } from "d3-array";

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
    const rows = ybin(col);
    return rows.map(row => {
      const u = col.x0;
      const v = row.x0;
      const width = col.x1 - col.x0;
      const height = row.x1 - row.x0;
      const value = simplex.noise3D(row.length, u, v);
      return { u, v, width, height, value };
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
