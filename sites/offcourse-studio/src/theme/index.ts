import defaultFonts from "./default-fonts";
import getFontFaces from "./utils";

const defaultColors = {
  black: "#000000",
  white: "#FFFFFF",
  darkGray: "#3d3d3d",
  mediumGray: "#c0c4c1",
  lightGray: "#f4f6f4",
  yellow: "#E5CF39",
  red: "#E34D2F",
  green: "#A5CC45",
  blue: "#75C7B3",
};

const createTheme = ({ fonts = defaultFonts, baseColors = defaultColors }) => ({
  colors: baseColors,
  fonts: {
    body: `${fonts.body.fontFamily}, Nitti Grotesk, Helvetica, sans-serif`,
    heading: `${fonts.heading.fontFamily}, Fira Sans Bold, Nitti Grotesk Bold, Helvetica Bold, sans-serif`,
    monospace: `${fonts.monospace.fontFamily}, Nitti Bold, Helvetica Bold, sans-serif`
  },
  fontSizes: ["0.75rem", "1rem", "1.375rem", "1.75rem", "2.5rem", "4rem"],
  grayScale: [
    baseColors.white,
    baseColors.lightGray,
    baseColors.mediumGray,
    baseColors.darkGray,
    baseColors.black
  ],
  breakpoints: ["30rem", "48rem", "64rem", "100rem"],
  lineHeights: [
    "1rem",
    "1.25rem",
    "1.375rem",
    "1.75rem",
    "1.875rem",
    "3rem",
    "4.5rem"
  ],
  space: [
    "0",
    "0.0625rem",
    "0.125rem",
    "0.25rem",
    "0.5rem",
    "0.75rem",
    "1rem",
    "1.5rem",
    "2rem"
  ],
  styles: {
    root: {
      fontFamily: "body",
      fontSize: 1
    },
    Main: {
      display: "flex",
      justifyContent: "column"
    },
    Container: {
      padding: 0,
      maxWidth: "100%"
    },
    h1: {
      fontSize: 5,
      margin: 0,
      wordSpacing: "-0.2em",
      fontFamily: "monospace",
    },
    h2: {
      fontSize: 2,
      margin: 0,
      fontFamily: "heading",
    },
    h3: {
      fontSize: 2,
      margin: 0,
      fontFamily: "heading",
    }
  },
  globals: `
        body {
            top: 0;
            left: 0;
            right: 0;
            margin: 0;
        }

        ::-webkit-scrollbar {
            width: 0px;  /* remove scrollbar space */
            background: transparent;  /* optional: just make scrollbar invisible */
        }

        ${getFontFaces(fonts)}

        * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            box-sizing: border-box;
        }
     `
});

export default createTheme;
