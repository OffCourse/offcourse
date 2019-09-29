import { useState, useEffect, useRef } from "react";
import { range, cross } from "d3-array";

const useGrid: (args: { width: number, height: number }) => {
  unitSize: number, grid: [number, number][]
} = (
  { width, height }
) => {
    const [gridData, setGridData] = useState({ grid: [], unitSize: 0 });
    useEffect(() => {
      const numberOfColumns = Math.ceil(width / 16);
      const unitSize = Math.ceil(width / numberOfColumns);
      const numberOfRows = Math.ceil(height / unitSize);
      const columns = range(numberOfColumns);
      const rows = range(numberOfRows);
      const grid = cross(columns, rows);
      setGridData({ unitSize, grid });
    }, [width, height]);
    return gridData;
  };

export default useGrid;
