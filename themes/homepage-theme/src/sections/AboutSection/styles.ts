export const wrapperStyles = {
  gridTemplateRows: ["auto 1fr", "1fr"],
  minHeight: ["auto", "auto", "auto", "30rem"],
  bg: ["grayScale.0"],
  py: [7, 7, 7, 7, 8]
};

export const textStyles = {
  display: "flex",
  flexDirection: "column",
  gridColumn: ["2/12", "2/12", "2/12", "2/8"],
  gridRow: ["1/3", "1/2"],
  justifyContent: ["start", "center"],
};

export const displayStyles = {
  display: ["none", "none", "none", "flex"],
  px: [5, 6, 7, 8],
  m: "-1.5rem",
  gridColumn: ["2/9", "8/13"],
  gridRow: "1/2",
  minHeight: "15rem",
};

const scale = [0.4, 0.4, 0.5, 0.5];
const spacing = scale.map(size => `${size}rem`);
const fontSize = scale.map(size => `${size * 5}rem`);
const lineHeight = scale.map(size => `${size * 5}rem`);

export const titleStyles = {
  fontSize,
  lineHeight,
  fontFamily: "monospace",
  wordSpacing: "-0.15em",
  mb: 4
};
