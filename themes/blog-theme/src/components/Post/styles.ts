import { SxStyleProp } from "theme-ui";

const wrapperStyles: SxStyleProp = {
  display: "block",
  position: "relative"
};

const displayStyles: SxStyleProp = {
  position: "relative"
};

const innerWrapperStyles: SxStyleProp = {
  p: 6,
  py: 8,
  bg: "white",
  display: "grid",
  gridTemplateColumns: "minmax(auto, 60rem)",
  justifyContent: "center"
};

const HeaderTextStyles: SxStyleProp = {
  p: 6,
  position: "absolute",
  bottom: 0,
  left: 0,
  bg: "transparent"
};

const textContainerStyles: SxStyleProp = {
  width: "100%",
  maxWidth: "60rem"
};

const excerptStyles: SxStyleProp = {
  fontSize: 2,
  lineHeight: 3
};

export {
  wrapperStyles,
  HeaderTextStyles,
  innerWrapperStyles,
  displayStyles,
  excerptStyles,
  textContainerStyles
};
