export const wrapperStyles = {
  userSelect: "none",
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  gridGap: [6, 6],
  pb: 7,
  alignItems: "start",
  bg: "grayScale.0"
};

export const headerStyles = {
  fontFamily: "monospace",
  fontSize: "2rem",
  lineHeight: "2rem",
  wordSpacing: "-0.2em",
  px: [6, 6]
};

export const imageStyles = {
  paddingTop: "100%",
  position: "relative",
  bg: "grayScale.4",
  mb: 4
};

export const captionStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  px: [6, 6],
  "p:last-of-type": {
    mb: 0
  }
};

const dist = ["3rem", "3rem", "3rem", "3rem", "3rem"];

export const innerStyles = {
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
