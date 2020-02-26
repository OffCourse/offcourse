import { DrawGrid } from "@offcourse/interfaces/src/canvas";
// @ts-ignore
import { bin, sum } from "d3-array";
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

// @ts-ignore
const calcGridCol = ({ col, numberOfRows }) => {
  const ybin = bin()
    .domain([0, 1])
    .thresholds(numberOfRows)
    .value(({ v }: { v: number }) => v);
  const cells: { x0: number; x1: number }[] = ybin(col);
  return cells.map(cell => calcGridCell({ col, cell }));
};

// @ts-ignore
const calcGridCell = ({ col, cell }) => {
  const u = col.x0;
  const v = cell.x0;
  const w = col.x1 - col.x0;
  const h = cell.x1 - cell.x0;
  // @ts-ignore
  const value = sum(cell, c => c.value) / cell.length;
  return { u, v, width: w, height: h, value: value || 0 };
};

// @ts-ignore
const calcGrid = ({ numberOfColumns, numberOfRows, elements }) => {
  const xbin = bin()
    .domain([0, 1])
    .thresholds(numberOfColumns)
    .value(({ u }: { u: number }) => u);
  const cols: { x0: number; x1: number }[] = xbin(elements);
  const binnedElements = cols.map(col => calcGridCol({ col, numberOfRows }));
  // @ts-ignore
  return binnedElements.flat();
};

export { drawGrid, calcGridCol, calcGridCell, calcGrid };
