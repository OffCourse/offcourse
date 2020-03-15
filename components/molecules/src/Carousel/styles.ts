import { SxStyleProp } from "theme-ui";

const outerWrapper: SxStyleProp = {
  width: "100rem",
  height: "100%",
  overflowX: "hidden"
};

const itemsWrapper: SxStyleProp = {
  flexDirection: "row",
  justifyContent: "center",
  display: "flex",
  "> *": {
    mx: 4
  }
};

const controlsWrapper: SxStyleProp = {
  flexDirection: "row",
  justifyContent: "center",
  display: "flex"
};

const controlStyles: SxStyleProp = {
  bg: "black",
  borderRadius: "1rem",
  width: "1rem",
  height: "1rem",
  my: 6,
  mx: 2
};

export { outerWrapper, controlsWrapper, controlStyles, itemsWrapper };
