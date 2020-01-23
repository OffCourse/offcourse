import {
  wrapperStyles as parentWrapperStyles,
  textStyles as parentTextStyles,
  logoContainerStyles,
  logoStyles
} from "@offcourse/homepage-theme/src/sections/HeroSection/styles";

const textStyles = {
  ...parentTextStyles,
  gridColumn: ["1/13", "1/8", "1/8", "1/8", "1/9"],
  textAlign: ["left", "left"]
};

const wrapperStyles = {
  ...parentWrapperStyles,
  bg: "secondary",
  height: ["100vh", "100vh", "100vh", "100vh", "100vh", "100vh"],
  gridTemplateRows: "1fr"
};

export { wrapperStyles, textStyles, logoStyles, logoContainerStyles };
