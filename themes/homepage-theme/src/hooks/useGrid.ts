import { useState, useEffect } from "react";
import { range, cross } from "d3-array";

const useGrid: (args: { numberOfRows: number, numberOfColumns: number }) => {
  grid: [number, number][]
} = (
  { numberOfRows, numberOfColumns }
) => {
    const [gridData, setGridData] = useState({ grid: [] });
    useEffect(() => {
      const columns = range(numberOfColumns);
      const rows = range(numberOfRows);
      const grid = cross(columns, rows);
      setGridData({ grid });
    }, [numberOfRows, numberOfColumns]);
    return gridData;
  };

export default useGrid;
