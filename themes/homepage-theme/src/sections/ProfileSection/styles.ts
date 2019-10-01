export const wrapperStyles = {
  gridTemplateRows: ["auto 1fr", "auto 1fr", "auto 1fr", "1fr"],
  bg: ["grayScale.0"],
  color: "grayScale.4",
};

export const columnStyles = {
  display: "flex",
  flexDirection: "column",
  gridColumn: ["1/10", "1/10", "span 3", "span 3", "span 2"],
  py: "2rem",
  h2: {
    fontSize: "1.5rem",
    fontFamily: "heading",
    wordSpacing: "-0.2em",
    lineHeight: "1.75rem",
    m: 0,
    mb: "2rem",
  },
  p: {
    m: 0
  }
};

export const titleStyles = {
  fontSize: "1.5rem",
  wordSpacing: "-0.2em",
  lineHeight: "1.75rem",
  gridRow: ["1/2"],
  bg: "grayScale.4",
  color: "grayScale.1",
  m: "-2rem",
  mr: 0,
  px: "2rem",
  py: "4rem",
  gridColumn: ["1/10", "1/10", "1/10", "1/10", "1/4"],
};
