const logoStyles = {
  h1: {
    color: "grayScale.0",
    bg: "grayScale.4"
  }
};

const footerStyles = {
  display: "grid",
  bg: "white",
  p: [4],
  gridRow: ["2/3"],
  justifyContent: "end",
  alignContent: "end"
};

const outerWrapper = {
  display: "grid",
  gridTemplateRows: ["8fr auto"]
};

const innerWrapper = {
  display: "grid",
  gridTemplateColumns: ["1fr", "2fr 1fr"],
  px: [6, 8],
  gridTemplateRows: ["3fr 1fr", "1fr"],
  justifyContent: "stretch"
};

const headlineStyles = {
  display: "grid",
  gridRow: ["2/3", "1/2"],
  alignItems: ["center"],
  mb: [6, 0],
  h1: {
    textAlign: ["center", "left"],
    fontFamily: "mistral",
    color: "white",
    fontSize: ["4rem", "7rem"],
    lineHeight: "4rem"
  }
};

const imageStyles = {
  display: "grid",
  pt: [6, 0],
  justifyContent: "stretch",
  alignContent: "center"
};

export {
  headlineStyles,
  logoStyles,
  imageStyles,
  outerWrapper,
  footerStyles,
  innerWrapper
};
