// @ts-ignore
import { bin, range, sum } from "d3-array";
import SimplexNoise from "simplex-noise";
import { GridCell } from "@offcourse/interfaces/src";
const simplex = new SimplexNoise();

type generateGrid = (args: {
  frame: number;
  numberOfElements: number;
  unitSize: number;
  width: number;
  height: number;
}) => GridCell[];

const generateGrid: generateGrid = ({
  frame,
  numberOfElements,
  unitSize,
  width,
  height
}) => {
  const elements = generateElements({ frame, numberOfElements });
  return elementsToGrid({ elements, unitSize, width, height });
};

type Element = { u: number; v: number; value: number };
type generateElements = (args: {
  frame: number;
  numberOfElements: number;
}) => Element[];

const generateElements: generateElements = ({
  frame,
  numberOfElements = 1000
}) => {
  const elems = range(numberOfElements).map(elem => {
    const u = (simplex.noise2D(elem, frame / 10000) + 1) / 2;
    const v = (simplex.noise2D(u, elem) + 1) / 2;
    const value = (simplex.noise2D(u, v) + 1) / 2;
    return { u, v, value };
  });
  return elems;
};

type elementsToGrid = (args: {
  elements: Element[];
  unitSize: number;
  width: number;
  height: number;
}) => GridCell[];

const elementsToGrid: elementsToGrid = ({
  elements,
  unitSize,
  width,
  height
}) => {
  const numberOfColumns = Math.ceil(width / unitSize);
  const numberOfRows = Math.ceil(height / unitSize);
  return calcGrid({ numberOfColumns, numberOfRows, elements });
};

type calcGrid = (args: {
  numberOfColumns: number;
  numberOfRows: number;
  elements: Element[];
}) => GridCell[];

const calcGrid: calcGrid = ({ numberOfColumns, numberOfRows, elements }) => {
  const xbin = bin()
    .domain([0, 1])
    .thresholds(numberOfColumns)
    .value(({ u }: { u: number }) => u);
  const cols: { x0: number; x1: number }[] = xbin(elements);
  const binnedElements = cols.map(col => {
    const ybin = bin()
      .domain([0, 1])
      .thresholds(numberOfRows)
      .value(({ v }: { v: number }) => v);
    const cells: { x0: number; x1: number }[] = ybin(col);
    return cells.map(cell => {
      const u = col.x0;
      const v = cell.x0;
      const w = col.x1 - col.x0;
      const h = cell.x1 - cell.x0;
      // @ts-ignore
      const value = sum(cell, c => c.value) / cell.length;
      return { u, v, width: w, height: h, value: value || 0 };
    });
  });
  // @ts-ignore
  return binnedElements.flat();
};

onmessage = (message: any) => {
  const { frame, numberOfElements, unitSize, width, height } = JSON.parse(
    message.data
  );
  const grid = generateGrid({
    frame,
    numberOfElements,
    unitSize,
    width,
    height
  });
  // @ts-ignore
  postMessage(JSON.stringify(grid));
};
