export const wrapperStyles = {
  gridTemplateRows: ["1fr"],
  bg: ["grayScale.0"],
  color: "grayScale.4",
  gridColumnGap: [4, 6, 7],
  px: [4, 6],
  py: [8, 8],
};

export const columnStyles = {
  display: "flex",
  flexDirection: "column",
  gridColumn: ["2/12", "2/12", "2/12", "span 4"],
  mb: [6, 6, 6, 0],
  "&:last-of-type": {
    mb: 0
  },
  h2: {
    fontSize: "1.3rem",
    fontFamily: "monospace",
    lineHeight: "1.5rem",
    wordSpacing: "-0.15em",
    m: 0,
    mb: "1rem",
  },
  p: {
    m: 0,
  }
};

const scale = [0.4, 0.4, 0.5, 0.5];
const spacing = scale.map(size => `${size}rem`);
const fontSize = scale.map(size => `${size * 5}rem`);
const lineHeight = scale.map(size => `${size * 6}rem`);

export const titleStyles = {
  gridRow: ["1/2"],
  gridColumn: ["1/13"],
  fontFamily: "monospace",
  fontSize,
  lineHeight,
  m: 0,
};
