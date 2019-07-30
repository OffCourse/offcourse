import React, { useRef, useEffect } from "react";
import styled from "@emotion/styled";

const rect = ({ ctx, x, y, width, height }) => {
  ctx.lineWidth = 0;
  ctx.fillStyle = Math.random() < 0.15 ? "red" : "white";
  ctx.fillRect(x, y, width, height);
};

const drawRects = ({ ctx, numberOfColumns }) => {
  const { width, height } = ctx.canvas;
  ctx.clearRect(0, 0, width, height);
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
};

const CellularAutomata = ({ className, width, height }) => {
  const ref: any = useRef();
  const canvas = ref.current;
  useEffect(() => {
    if (canvas) {
      const ctx = canvas.getContext("2d");
      const numberOfColumns = 50;
      drawRects({ ctx, width, height, numberOfColumns });
      window.setInterval(
        () => drawRects({ ctx, width, height, numberOfColumns }),
        1000
      );
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
