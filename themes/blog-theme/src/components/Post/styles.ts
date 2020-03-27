import { SxStyleProp } from "theme-ui";

const wrapperStyles: SxStyleProp = {
  bg: "white",
  height: "100%",
};

const imageStyles = {
  height: "100%",
  maxHeight: "32rem",
};

const innerWrapperStyles: SxStyleProp = {
  display: "grid",
  gridTemplateColumns: "minmax(auto, 60rem)",
  justifyContent: "center",
  justifyItems: "bottom",
};

const HeaderTextStyles: SxStyleProp = {
  display: "grid",
  gridTemplateColumns: "minmax(auto, 60rem)",
  height: "100%",
  justifyContent: "center",
  alignContent: "end",
  px: [6, 8],
  py: [6, 6],
  zIndex: 1,
};

const textContainerStyles: SxStyleProp = {
  px: [6, 8],
  py: [6, 6],
  ".footnotes": {
    mt: 8,
  },
};

export {
  wrapperStyles,
  HeaderTextStyles,
  innerWrapperStyles,
  imageStyles,
  textContainerStyles,
};
