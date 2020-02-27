// @ts-ignore
import { bin, range, sum } from "d3-array";
import SimplexNoise from "simplex-noise";

const simplex = new SimplexNoise();

// @ts-ignore
const generateGrid = async ({ frame, unitSize, width, height }) => {
  const elements = await generateElements(frame);
  const numberOfColumns = Math.ceil(width / unitSize);
  const numberOfRows = Math.ceil(height / unitSize);
  return calcGrid({ numberOfColumns, numberOfRows, elements });
};

const generateElements = async (frame: number) => {
  const elems = range(1000).map(elem => {
    const u = (simplex.noise2D(elem, frame / 10000) + 1) / 2;
    const v = (simplex.noise2D(u, elem) + 1) / 2;
    const value = (simplex.noise2D(u, v) + 1) / 2;
    return { u, v, value };
  });
  return elems;
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

export default generateGrid;
