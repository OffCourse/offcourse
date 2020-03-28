import { SxStyleProp } from "theme-ui";

const wrapperStyles: SxStyleProp = {
  height: "32rem",
  position: "relative",
};

const sidepanelStyles: SxStyleProp = {
  position: "absolute",
  top: 0,
  bottom: 0,
  bg: "black",
  p: 6,
  display: "flex",
  width: "15rem",
};

const imageStyles: SxStyleProp = {
  height: "100%",
};

const headerTextStyles: SxStyleProp = {
  display: "grid",
  gridTemplateColumns: "minmax(auto, 60rem)",
  height: "100%",
  justifyContent: "center",
  alignContent: "end",
  px: [6, 8],
  py: [6, 6],
};

export { sidepanelStyles, wrapperStyles, imageStyles, headerTextStyles };
