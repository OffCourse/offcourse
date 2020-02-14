import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles = {
  display: "grid",
  pt: [7, 7, 7, 8, "5rem"],
  pb: 6,
  px: 6,
  bg: "grayScale.4",
  maxHeight: "60vh"
};

export const contactStyles: SxStyleProp = {
  order: [0, 1],
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignSelf: "center",
  lineHeight: "0.4rem",
  fontFamily: "body",
  color: "grayScale.0",
  gridRow: [2, 1],
  h2: {
    fontFamily: "monospace",
    wordSpacing: "-0.3em",
    mb: 1
  },
  p: {
    mb: 0
  }
};

export const scalingContainerStyles = {
  display: "grid",
  gridTemplateColumns: ["1fr 1fr", "1fr 1fr 1fr"],
  gridTemplateRows: ["1fr 1fr", "1fr"],
  gridRowGap: [6, 7],
  "@media(max-width: 20rem)": {
    transformOrigin: "top left",
    transform: ["scale(0.8)", "none"]
  }
};

export const drawerStyles: SxStyleProp = {
  alignItems: "center",
  justifySelf: ["center"],
  gridColumn: ["span 2", "span 1"],
  order: [0, 1],
  gridRow: [1, 1]
};

export const logoStyles = {
  gridRow: [2, 1],
  order: [2, 2],
  alignSelf: "center",
  h1: {
    color: "grayScale.4",
    bg: "grayScale.0"
  }
};
