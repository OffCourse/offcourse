const innerWrapper = {
  display: "grid",
  alignContent: "center",
  justifyContent: "stretch",
  px: [4, 4, 8, 8],
  py: [8, 8]
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
