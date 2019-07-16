const globals = `
  body {
    top: 0;
    left: 0;
    right: 0;
  }

  ::-webkit-scrollbar {
      width: 0px;  /* remove scrollbar space */
      background: transparent;  /* optional: just make scrollbar invisible */
  }

  @font-face {
    font-family: 'Nitti Grotesk';
    font-weight: 300;
    font-display: fallback;
    src: local('Nitti Grotesk'),
         url('fonts/NGN.woff') format('woff'),
         url('https://offcourse.io/fonts/NGN.woff') format('woff');
  }

  @font-face {
    font-family: 'Nitti Grotesk Bold';
    font-weight: 700;
    font-display: fallback;
    src: local('Nitti Grotesk Bold'),
         url('fonts/NGB.woff') format('woff'),
         url('https://offcourse.io/fonts/NGB.woff') format('woff');
  }

  @font-face {
    font-family: 'Nitti Bold';
    font-weight: 700;
    font-display: fallback;
    src: local('Nitti Bold'),
         url('fonts/NB.woff') format('woff'),
         url('https://offcourse.io/fonts/NB.woff') format('woff');
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
`;

const theme = {
    fonts: {
        body: "Nitti Grotesk, Helvetica, sans-serif",
        heading: "Nitti Grotesk Bold, Helvetica Bold, sans-serif",
        monospace: "Nitti Bold, Helvetica Bold, sans-serif"
    },
    styles: {
        root: {
            fontFamily: "heading",
            color: "orange"
        }
    },
    globals
};

export default theme;
