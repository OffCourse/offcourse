// @ts-ignore
import { bin, range, sum } from "d3-array";
import SimplexNoise from "simplex-noise";

const simplex = new SimplexNoise();

// @ts-ignore
const generateElements = (frame: number) => {
  const elems = range(1000).map(elem => {
    const u = (simplex.noise2D(elem, frame / 10000) + 1) / 2;
    const v = (simplex.noise2D(u, elem) + 1) / 2;
    const value = (simplex.noise2D(u, v) + 1) / 2;
    return { u, v, value };
  });
  return elems;
};

onmessage = (message: any) => {
  const grid = generateElements(message.data);
  // @ts-ignore
  postMessage(JSON.stringify(grid));
};
