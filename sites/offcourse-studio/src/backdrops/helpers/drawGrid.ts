import SimplexNoise from "simplex-noise";
const simplex = new SimplexNoise();

const drawGrid = ({ ctx, shape, frame, grid, unitSize, primaryColor, secondaryColor }) => {
  const { width, height } = ctx.canvas;
  ctx.clearRect(0, 0, width, height);
  for (const [u, v] of grid) {
    const x = u * unitSize;
    const y = v * unitSize;
    const value = simplex.noise3D(x, y, frame / 6);
    shape({
      ctx,
      x,
      y,
      value,
      primaryColor,
      secondaryColor,
      width: unitSize,
      height: unitSize
    });
  }
};

export default drawGrid;
