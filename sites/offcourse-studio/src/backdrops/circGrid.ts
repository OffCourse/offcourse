import drawGrid from "./helpers/drawGrid";
import SimplexNoise from "simplex-noise";

var simplex = new SimplexNoise();

const circ = ({ ctx, x, y, z, primaryColor, secondaryColor, width, height }) => {
  const value = simplex.noise3D(x, y, z);
  var radius = width / 2;
  ctx.lineWidth = 0;
  ctx.beginPath();
  ctx.arc(x, y, Math.random() * radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = value < 0 ? primaryColor : secondaryColor;
  ctx.fill();
};

const circGrid = ({ ctx, theme, frame }) => {
  const { primary, grayScale } = theme.colors;
  drawGrid({ ctx, primaryColor: primary, secondaryColor: grayScale[0], shape: circ, frame })
};

export default circGrid;
