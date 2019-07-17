import FSR from "./fonts/Fira Sans/FiraSans-Regular.otf"
import FSB from "./fonts/Fira Sans/FiraSans-Bold.otf"
import FCB from "./fonts/Fira Code/FiraCode-Bold.woff2"
import NB from "./fonts/Nitti/NB.woff"
import NGB from "./fonts/Nitti/NGB.woff"
import NGN from "./fonts/Nitti/NGN.woff"

const baseColors = {
    black: "#000000",
    white: "#FFFFFF",
    darkGray: "#797B7A",
    mediumGray: "#C8CAC9",
    lightGray: "#f4f6f4",
    yellow: "#fdbe68",
    red: "#E2625E",
    green: "#658f7b",
    blue: "#b5decb"
};

const theme = {
    fonts: {
        body: "Fira Sans Regular, Nitti Grotesk, Helvetica, sans-serif",
        heading: "Fira Sans Bold, Nitti Grotesk Bold, Helvetica Bold, sans-serif",
        monospace: "Fira Code Bold, Nitti Bold, Helvetica Bold, sans-serif"
    },
    fontSizes: ["0.75rem", "1rem", "1.375rem", "1.75rem", "2.5rem", "4rem"],
    grayScale: [
        baseColors.white,
        baseColors.lightGray,
        baseColors.mediumGray,
        baseColors.darkGray,
        baseColors.black
    ],
    breakpoints: ["30rem", "48rem", "64rem"],
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
            fontSize: 5
        },
        Container: {
            padding: 0,
            maxWidth: "100%"
        },
        h1: {
            fontSize: 5,
            margin: 0,
            fontFamily: "monospace",
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

        @font-face {
            font-family: 'Fira Sans Regular';
            font-weight: 400;
            font-display: fallback;
            src: local('Fira Sans Regular'),
            url(${FSR}) format('opentype')
        }

        @font-face {
            font-family: 'Fira Code Bold';
            font-weight: 700;
            font-display: fallback;
            src: local('Fira Code Bold'),
            url(${FCB}) format('woff2')
        }

        @font-face {
            font-family: 'Fira Sans Bold';
            font-weight: 700;
            font-display: fallback;
            src: local('Fira Sans Bold'),
            url(${FSB}) format('opentype')
        }
        @font-face {
            font-family: 'Nitti Grotesk';
            font-weight: 300;
            font-display: fallback;
            src: local('Nitti Grotesk'),
            url(${NGN}) format('woff'),
                url('https://offcourse.io/fonts/NGN.woff') format('woff');
        }

        @font-face {
            font-family: 'Nitti Grotesk Bold';
            font-weight: 700;
            font-display: fallback;
            src: local('Nitti Grotesk Bold'),
                url(${NGB}) format('woff'),
                url('https://offcourse.io/fonts/NGB.woff') format('woff');
        }

        @font-face {
            font-family: 'Nitti Bold';
            font-weight: 700;
            font-display: fallback;
            src: local('Nitti Bold'),
                url(${NB}) format('woff'),
                url('https://offcourse.io/fonts/NB.woff') format('woff');
        }

        * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            box-sizing: border-box;
        }
     `
};

export default theme;
