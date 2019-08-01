import React, { useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { useThemeUI } from "theme-ui";

import SimplexNoise from "simplex-noise";

const simplex = new SimplexNoise();

const rect = ({ ctx, x, y, z, foreground, background, width, height }) => {
  ctx.lineWidth = 0;
  const value = simplex.noise3D(x, y, z);
  ctx.fillStyle = value < 0 ? foreground : background;
  ctx.fillRect(x, y, width, height);
};

const drawRects = ({ ctx, numberOfColumns, foreground, background }) => {
  const { width, height } = ctx.canvas;
  window.requestAnimationFrame(() => {
    ctx.clearRect(0, 0, width, height);
    const unitSize = width / numberOfColumns;
    const numberOfRows = height / unitSize;
    for (let x = 0; x <= numberOfColumns; x++) {
      for (let y = 0; y <= numberOfRows; y++) {
        rect({
          ctx,
          x: x * unitSize,
          y: y * unitSize,
          z: Math.floor(Date.now() / 1000),
          foreground,
          background,
          width: unitSize,
          height: unitSize
        });
      }
    }
  });
};

const CellularAutomata = ({ className, width, height }) => {
  const ref: any = useRef();
  const canvas = ref.current;
  const context = useThemeUI();
  const { green, yellow } = context.theme.colors;
  useEffect(() => {
    if (canvas) {
      const ctx = canvas.getContext("2d");
      const numberOfColumns = 10;
      drawRects({
        ctx,
        foreground: green,
        background: yellow,
        numberOfColumns
      });
      setInterval(() => {
        drawRects({
          ctx,
          foreground: green,
          background: yellow,
          numberOfColumns
        });
      }, 2000);
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
