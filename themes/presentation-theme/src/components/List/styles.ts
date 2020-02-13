const innerWrapper = {
  display: "grid",
  p: [4, 6],
  fontSize: [1, 2, 3, 3],
  lineHeight: [1, 2, 4, 4],
  alignContent: "center",
  dt: {
    color: "white",
    p: [2, 4, 6, 6],
    pt: [6, 6, 6, 6],
    pb: [0, 0, 0, 0],
    fontWeight: 700,
    textAlign: "left",
    "&:first-of-type:": {
      pt: [0, 0, 0, 0]
    }
  },
  dd: {
    m: [0, 0, 0, 0],
    p: [2, 4, 6, 6],
    pb: [0, 0, 0, 0],
    textAlign: "left"
  }
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
