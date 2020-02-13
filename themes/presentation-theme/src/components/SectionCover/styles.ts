const outerWrapper = {
  display: "grid"
};

const innerWrapper = {
  display: "grid",
  p: [4, 6],
  alignContent: "center",
  gridRowGap: [8, "8rem"],
  "> h1": {
    textAlign: ["center", "center"],
    fontFamily: "mistral",
    color: "white",
    fontSize: ["4rem", "7rem"],
    lineHeight: "4rem"
  }
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

export { headlineStyles, innerWrapper, outerWrapper };
