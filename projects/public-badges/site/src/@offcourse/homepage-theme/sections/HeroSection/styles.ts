import {
  wrapperStyles as parentWrapperStyles,
  textStyles as parentTextStyles,
  logoContainerStyles as parentLogoContainerStyles,
  logoStyles as parentLogoStyles
} from "@offcourse/homepage-theme/src/sections/HeroSection/styles";

const textStyles = {
  ...parentTextStyles,
  gridColumn: ["1/13", "1/11", "1/11", "1/8", "1/9"],
  gridRow: ["2/3", "2/3", "2/3", "1/2"]
};

const logoContainerStyles = {
  ...parentLogoContainerStyles,
  gridColumn: ["1/13", "1/13", "1/13", "8/13", "9/13"],
  alignContent: ["center", "center", "center", "center"],
  justifyContent: ["center", "center", "end", "end"],
  gridRow: ["1/2", "1/2"]
};

const logoStyles = {
  ...parentLogoStyles,
  width: ["20rem"],
  height: ["20rem"]
};

const wrapperStyles = {
  ...parentWrapperStyles,
  bg: "secondary",
  height: ["95vh", "95vh", "95vh", "95vh", "95vh", "95vh"],
  justifyContent: "center",
  alignContent: "center",
  gridTemplateRows: ["2fr 1fr", "2fr 1fr", "2fr 1fr", "1fr"]
};

export { wrapperStyles, textStyles, logoStyles, logoContainerStyles };
