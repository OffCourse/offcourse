import { SxStyleProp } from "theme-ui";

export const wrapperStyles: SxStyleProp = {
  userSelect: "none",
  width: ["calc(100vw - 2rem)", "30rem"],
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  gridGap: [6, 6],
  pb: 7,
  mx: [4, 2, 4, 6],
  mb: [6, 8],
  alignItems: "start",
  bg: "grayScale.0"
};

export const headerStyles: SxStyleProp = {
  fontFamily: "monospace",
  fontSize: "2rem",
  lineHeight: "2rem",
  wordSpacing: "-0.2em",
  px: [6, 6]
};

export const imageStyles: SxStyleProp = {
  paddingTop: "100%",
  position: "relative",
  bg: "grayScale.4",
  mb: 4
};

export const captionStyles: SxStyleProp = {
  display: "flex",
  flexDirection: "column",
  justifyC6ontent: "flex-end",
  px: [6, 6],
  "p:last-of-type": {
    mb: 0
  }
};

const dist = ["6rem", "6rem", "6rem", "6rem", "6rem"];

export const innerStyles: SxStyleProp = {
  position: "absolute",
  top: dist,
  bottom: dist,
  left: dist,
  right: dist,
  img: {
    width: "100%"
  },
  display: "flex",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "monospace",
  fontSize: "2rem",
  wordSpacing: "-0.2em"
};
