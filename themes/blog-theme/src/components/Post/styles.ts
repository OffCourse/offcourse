import { SxStyleProp } from "theme-ui";

const wrapperStyles: SxStyleProp = {
  bg: "white",
};

const innerWrapperStyles: SxStyleProp = {
  display: "grid",
  gridTemplateColumns: "minmax(auto, 60rem)",
  justifyContent: "center",
  justifyItems: "bottom",
};

const textContainerStyles: SxStyleProp = {
  px: [6, 8],
  py: [6, 6],
  ".footnotes": {
    mt: 8,
  },
};

export { wrapperStyles, innerWrapperStyles, textContainerStyles };
