import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles = {
  display: "grid",
  gridTemplateRows: ["1fr 1fr", "1fr"],
  gridTemplateColumns: ["1fr", "1fr 1fr"],
  gridRowGap: [6],
  px: [6, 6, 8, 8],
  py: [6, 6, 8, 8],
  bg: "grayScale.4",
  height: "100%",
  alignItems: "center"
};

export const contactStyles: SxStyleProp = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  lineHeight: "0.4rem",
  fontFamily: "body",
  color: "grayScale.0",
  h2: {
    fontFamily: "monospace",
    wordSpacing: "-0.3em",
    lineHeight: "1.rem",
    mb: 1
  },
  p: {
    mb: 0
  }
};

export const drawerStyles: SxStyleProp = {
  justifySelf: ["end"]
};
