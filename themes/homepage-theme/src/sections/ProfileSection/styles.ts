export const wrapperStyles = {
  gridTemplateRows: ["auto 1fr", "auto 1fr", "auto 1fr", "auto 1fr"],
  bg: ["grayScale.1"],
  color: "grayScale.4",
  gridRowGap: [6],
  px: [6, 6],
  py: [7, 7, 7, 8, 8]
}

export const columnStyles = {
  display: "flex",
  flexDirection: "column",
  gridColumn: ["span 12", "span 12", "span 12", "span 4"],
  mb: [6, 6, 6, 0],
  "&:last-of-type": {
  },
  h2: {
    fontSize: "1.3rem",
    fontFamily: "heading",
    lineHeight: "1.5rem",
    m: 0,
    mb: "1rem",
  },
  p: {
    m: 0,
  }
};
const scale = [0.4, 0.4, 0.5, 0.5];
const spacing = scale.map(size => `${size}rem`);
const fontSize = scale.map(size => `${size * 5}rem`)
const lineHeight = scale.map(size => `${size * 6}rem`)

export const titleStyles = {
  gridRow: ["1/2"],
  gridColumn: ["1/13"],
  fontFamily: "monospace",
  fontSize,
  lineHeight,
  m: 0,
  wordSpacing: "-0.3em"
};

export const dividerStyles = {
}
