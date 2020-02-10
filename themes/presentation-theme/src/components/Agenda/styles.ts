const innerWrapper = {
  display: "grid",
  p: [4, 6],
  alignContent: "center",
  gridRowGap: [8, "8rem"]
};
const outerWrapper = {
  display: "grid",
  gridTemplateRows: ["14fr 1fr"]
};

const footerStyles = {
  display: "grid",
  bg: "white",
  p: [4],
  gridRow: ["2/3"],
  justifyContent: "end",
  alignContent: "center"
};

const logoStyles = {
  h1: {
    color: "grayScale.4",
    bg: "grayScale.0"
  }
};

export { outerWrapper, innerWrapper, footerStyles, logoStyles };
