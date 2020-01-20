import {
  wrapperStyles as parentWrapperStyles,
  textStyles as parentTextStyles,
  displayStyles as parentDisplayStyles,
  titleStyles as parentTitleStyles
} from "@offcourse/homepage-theme/src/sections/AboutSection/styles";

const wrapperStyles = {
  ...parentWrapperStyles,
  bg: ["transparent"],
  gridRowGap: "2rem",
  color: "white"
};

const textStyles = {
  ...parentTextStyles,
  gridColumn: ["2/12", "2/12", "2/12", "7/12"],
  gridRow: ["1/2", "1/2"]
};

const titleStyles = {
  ...parentTitleStyles,
  wordSpacing: "0.15rem"
};

const displayStyles = {
  ...parentDisplayStyles,
  gridColumn: ["2/12", "1/6"],
  margin: 0,
  gridColumnGap: [7, 7, 7],
  gridRow: ["2/3", "1/2"],
  display: ["flex", "flex", "flex", "flex"]
};

export { wrapperStyles, textStyles, displayStyles, titleStyles };
