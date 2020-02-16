const innerWrapper = {
  display: "grid",
  p: [4, 6],
  alignContent: "center",
  gridRowGap: [6, "6rem"]
};
const outerWrapper = {
  display: "grid",
  gridTemplateRows: ["14fr 1fr"]
};

const logoStyles = {
  h1: {
    color: "grayScale.4",
    bg: "grayScale.0"
  }
};

export { outerWrapper, innerWrapper, logoStyles };