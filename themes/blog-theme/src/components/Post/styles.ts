import { SxStyleProp } from "theme-ui";

const wrapperStyles: SxStyleProp = {
  display: "block",
  position: "relative"
};

const displayStyles: SxStyleProp = {
  display: "grid",
  height: "32rem",
  alignContent: "end"
};

const innerWrapperStyles: SxStyleProp = {
  p: 6,
  bg: "white",
  display: "grid",
  gridTemplateColumns: "minmax(auto, 60rem)",
  justifyContent: "center"
};

const HeaderTextStyles: SxStyleProp = {
  ...innerWrapperStyles,
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
