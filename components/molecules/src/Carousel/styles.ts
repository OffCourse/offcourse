import { SxStyleProp } from "theme-ui";

const outerWrapper: SxStyleProp = {
  width: "100rem",
  height: "100%",
  overflowX: "hidden"
};

const itemsWrapper: SxStyleProp = {
  flexDirection: "row",
  display: "flex"
};

const controlsWrapper: SxStyleProp = {
  flexDirection: "row",
  justifyContent: "center",
  display: "flex"
};

const controlStyles: SxStyleProp = {
  bg: "black",
  borderRadius: "0.5rem",
  width: "2rem",
  height: "2rem",
  m: 4
};

export { outerWrapper, controlsWrapper, controlStyles, itemsWrapper };
