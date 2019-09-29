import drawGrid from "./helpers/drawGrid";

const circ = ({ ctx, x, y, value, primaryColor, secondaryColor, width, height }) => {
  var radius = width / 2;
  ctx.lineWidth = 0;
  ctx.beginPath();
  ctx.arc(x, y, Math.random() * radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = value < 0 ? primaryColor : secondaryColor;
  ctx.fill();
};

const circGrid = ({ ctx, theme, frame, unitSize, grid }) => {
  const { primary, grayScale } = theme.colors;
  drawGrid({
    ctx,
    primaryColor: primary,
    secondaryColor: grayScale[0],
    shape: circ,
    frame,
    unitSize,
    grid
  })
};

export default circGrid;
