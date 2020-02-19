import { SxStyleProp } from "theme-ui";

export const wrapperStyles = {
  display: "grid",
  pt: [7, 7, 7, 8, "5rem"],
  pb: [6, 6, 8, 8],
  px: [6, 6, 8, 8],
  bg: "grayScale.4",
  maxHeight: "50vh",
  gridTemplateColumns: ["1fr", "1fr 2fr"],
  gridGap: 7
};

export const contactStyles: SxStyleProp = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  lineHeight: "0.4rem",
  fontFamily: "body",
  fontSize: 1,
  color: "grayScale.0",
  h2: {
    fontFamily: "monospace",
    wordSpacing: "-0.3em",
    mb: 1
  },
  p: {
    mb: 0
  }
};

export const logoStyles = {
  h1: {
    color: "grayScale.4",
    bg: "grayScale.0"
  }
};
