export const wrapperStyles = {
  gridTemplateRows: ["auto 1fr", "auto 1fr", "auto 1fr", "1fr"],
  bg: ["grayScale.0"],
  color: "grayScale.4",
  py: ["3rem", "3rem", "3rem", "4rem"]
}

export const columnStyles = {
  display: "flex",
  flexDirection: "column",
  gridColumn: ["1/10", "1/10", "span 3", "span 3", "span 2"],
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
const scale = [0.4, 0.4, 0.5, 0.5];
const spacing = scale.map(size => `${size}rem`);
const fontSize = scale.map(size => `${size * 5}rem`)
const lineHeight = scale.map(size => `${size * 6}rem`)

export const titleStyles = {
  h1: {
    fontSize,
    lineHeight,
    px: spacing,
    mb: spacing,
  },
  gridRow: ["1/2"],
  gridColumn: ["1/10", "1/10", "1/10", "1/10", "1/4"],
};

export const dividerStyles = {
}
