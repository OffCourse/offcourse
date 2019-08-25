export default (f) => Object.values(f).map(({ fontFamily, fontWeight, url, format }) => `
  @font-face {
    font-family: ${fontFamily};
    font-weight: ${fontWeight};
    font-display: fallback;
    src: local("${fontFamily}"),
    url("${url}") format("${format}")
  }
`).join("")
