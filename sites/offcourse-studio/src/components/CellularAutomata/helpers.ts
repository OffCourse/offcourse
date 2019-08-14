import SimplexNoise from "simplex-noise";

const simplex = new SimplexNoise();

const rect = ({ ctx, x, y, z, foreground, background, width, height }) => {
  ctx.lineWidth = 0;
  const value = simplex.noise3D(x, y, z);
  ctx.fillStyle = value < 0 ? foreground : background;
  ctx.fillRect(x, y, width, height);
};

export const drawRects = ({ ctx, numberOfColumns, foreground, background }) => {
  const { width, height } = ctx.canvas;
  window.requestAnimationFrame(() => {
    ctx.clearRect(0, 0, width, height);
    const unitSize = width / numberOfColumns;
    const numberOfRows = Math.ceil(height / unitSize);
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
