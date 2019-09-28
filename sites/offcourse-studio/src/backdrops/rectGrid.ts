import drawGrid from "./helpers/drawGrid";
import SimplexNoise from "simplex-noise";

var simplex = new SimplexNoise();

const rect = ({ ctx, x, y, z, primaryColor, secondaryColor, width, height }) => {
  ctx.lineWidth = 0;
  const value = simplex.noise3D(x, y, z);
  ctx.fillStyle = value < 0 ? primaryColor : secondaryColor;
  ctx.fillRect(x, y, width, height);
};

const rectGrid = ({ ctx, primaryColor, secondaryColor }) => {
  drawGrid({ ctx, primaryColor, secondaryColor, shape: rect })
};

export default rectGrid;
