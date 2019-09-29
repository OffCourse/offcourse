const drawGrid = ({ ctx, shape, primaryColor, secondaryColor }) => {
  const { width, height } = ctx.canvas;
  ctx.clearRect(0, 0, width, height);
  const numberOfColumns = Math.ceil(width / 16);
  const unitSize = Math.ceil(width / numberOfColumns);
  const numberOfRows = Math.ceil(height / unitSize);
  for (let x = 0; x <= numberOfColumns; x++) {
    for (let y = 0; y <= numberOfRows; y++) {
      shape({
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
};

export default drawGrid;
