import { wrapperStyles as parentWrapperStyles } from "@offcourse/homepage-theme/src/sections/FooterSection/styles";

const wrapperStyles = {
  ...parentWrapperStyles,
  justifyContent: "center",
  p: [4, 4, 6],
  height: ["35vh", "35vh", "25vh", "25vh", "25vh", "25vh"],
  gridTemplateColumns: ["1fr 1fr", "1fr 1fr", "1fr 1fr 1fr", "1fr 1fr 1fr"],
  gridTemplateRows: ["1fr 1fr", "1fr 1fr", "1fr", "1fr"],
  alignItems: "center",
  gridColumnGap: "1rem",
  gridRowGap: "0rem"
};

const scale = [0.3, 0.375, 0.5, 0.5];
const spacing = scale.map((size) => `${size}rem`);
const fontSize = scale.map((size) => `${size * 5}rem`);
const lineHeight = scale.map((size) => `${size * 6}rem`);

const waagLogoStyle = {
  gridColumn: ["1 / 2", "1/2"],
  gridRow: ["2/3", "2/3", "1/2"],
  svg: {
    maxHeight: "6rem",
    maxWidth: "20rem"
  }
};

const publicSpacesLogoStyle = {
  gridRow: "1/2",
  mt: [4, 0],
  gridColumn: ["1/3", "1/3", "2/3"],
  justifyContent: "center",
  svg: {
    maxHeight: "8rem"
  }
};

const offcourseLogoStyle = {
  gridColumn: ["2/3", "2/3", "3/4"],
  gridRow: ["2/3", "2/3", "1/2"],
  h1: {
    fontSize,
    lineHeight,
    px: spacing,
    wordSpacing: "-0.2em",
    color: "grayScale.4",
    bg: "grayScale.0"
  }
};

export const drawerStyles = {
  alignItems: "center",
  justifySelf: ["center"],
  gridColumn: ["span 2", "span 1"],
  order: [0, 1],
  gridRow: [1, 1]
};
export {
  wrapperStyles,
  publicSpacesLogoStyle,
  waagLogoStyle,
  offcourseLogoStyle
};
