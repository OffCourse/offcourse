import SimplexNoise from "simplex-noise";

const simplex = new SimplexNoise();

const rect = ({ ctx, x, y, z, primaryColor, secondaryColor, width, height }) => {
  ctx.lineWidth = 0;
  const value = simplex.noise3D(x, y, z);
  ctx.fillStyle = value < 0 ? primaryColor : secondaryColor;
  ctx.fillRect(x, y, width, height);
};

export const drawRects = ({ ctx, numberOfColumns, primaryColor, secondaryColor }) => {
  const { width, height } = ctx.canvas;
  window.requestAnimationFrame(() => {
    ctx.clearRect(0, 0, width, height);
    const unitSize = Math.ceil(width / numberOfColumns);
    const numberOfRows = Math.ceil(height / unitSize);
    for (let x = 0; x <= numberOfColumns; x++) {
      for (let y = 0; y <= numberOfRows; y++) {
        rect({
          ctx,
          x: x * unitSize,
          y: y * unitSize,
          z: Date.now() / 1000,
          primaryColor,
          secondaryColor,
          width: unitSize,
          height: unitSize
        });
      }
    }
  });
};
