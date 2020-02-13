const logoStyles = {
  h1: {
    color: "grayScale.0",
    bg: "grayScale.4"
  }
};

const infoStyles = {
  display: "grid",
  alignContent: ["end", "end", "end"],
  justifyContent: ["end", "end"],
  pb: [4, 4, 4],
  p: {
    textAlign: ["right", "right"],
    fontSize: [2, 2, 4],
    mb: [4, 4, 5]
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
  gridTemplateColumns: ["1fr", "1fr", "1fr", "2fr 1fr"],
  px: [4, 5],
  gridTemplateRows: ["3fr 1fr", "3fr 1fr", "3fr 1fr", "1fr"],
  justifyContent: "stretch"
};

const headlineStyles = {
  display: "grid",
  alignItems: ["center"],
  mb: [6, 0],
  h1: {
    p: 4,
    textAlign: ["left", "left"],
    fontFamily: "mistral",
    color: "white",
    fontSize: ["4rem", "7rem"],
    lineHeight: "4rem"
  }
};

export {
  infoStyles,
  headlineStyles,
  logoStyles,
  outerWrapper,
  footerStyles,
  innerWrapper
};
