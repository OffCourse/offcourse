import React, { useRef, useEffect } from "react";
import styled from "@emotion/styled";

const rect = ({ ctx, x, y, width, height }) => {
  ctx.fillStyle = Math.random() < 0.3 ? "red" : "white";
  ctx.lineWidth = 0;
  ctx.fillRect(x, y, width, height);
};

const CellularAutomata = ({ className, width, height }) => {
  const ref: any = useRef();
  const canvas = ref.current;
  useEffect(() => {
    if (canvas) {
      const ctx = canvas.getContext("2d");
      window.setInterval(() => {
        ctx.clearRect(0, 0, width, height);
        const numberOfColumns = 30;
        const unitSize = width / numberOfColumns;
        const numberOfRows = height / unitSize;
        for (let x = 0; x <= numberOfColumns; x++) {
          for (let y = 0; y <= numberOfRows; y++) {
            rect({
              ctx,
              x: x * unitSize,
              y: y * unitSize,
              width: unitSize,
              height: unitSize
            });
          }
        }
      }, 1000);
    }
  }, [width, height]);
  return (
    <canvas ref={ref} className={className} width={width} height={height} />
  );
};

export default styled(CellularAutomata)`
  position: absolute;
  z-index: -1;
`;
