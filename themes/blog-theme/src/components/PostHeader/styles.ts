import { SxStyleProp } from "theme-ui";

const wrapperStyles: SxStyleProp = {
  position: "relative",
  height: "24rem",
};

const metaStyles: SxStyleProp = {
  display: "flex",
  flexDirection: "column",
  userSelect: "none",
  justifyContent: "space-between",
  color: "white",
  height: "100%",
};

const definitionStyles: SxStyleProp = {
  display: "grid",
  gridTemplateColumns: "auto 2fr",
  my: 0,
  "> dt": {
    fontFamily: "heading",
  },
  "> dd": {
    ml: 3,
  },
  ".multiline": {
    gridColumn: "span 2",
    ml: 0,
  },
};

const tagsStyles: SxStyleProp = {
  display: "block",
  textAlign: "right",
};

const tagStyles: SxStyleProp = {
  display: "inline-grid",
  alignContent: "right",
  py: 3,
  px: 2,
  mt: 2,
  ml: 2,
  "> p": {
    mb: 0,
    fontFamily: "monospace",
    fontSize: 0,
    lineHeight: "0rem",
    color: "black",
  },
  bg: "white",
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

const excerptStyles: SxStyleProp = {
  color: "white",
  fontSize: 1,
  lineHeight: 1,
  userSelect: "none",
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

export {
  sidepanelStyles,
  metaStyles,
  wrapperStyles,
  excerptStyles,
  definitionStyles,
  imageStyles,
  tagStyles,
  tagsStyles,
  headerTextStyles,
};
