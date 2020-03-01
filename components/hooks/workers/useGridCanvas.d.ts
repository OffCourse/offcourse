import { RefObject } from "react";
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
declare const useGridCanvas: (args: any) => RefObject<HTMLCanvasElement>;
export default useGridCanvas;
