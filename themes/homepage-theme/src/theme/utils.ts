interface IFontDef {
  fontFamily: string;
  fontWeight: number;
  url: string;
  format: string;
}

const createFont = ({ fontFamily, fontWeight, url, format }: IFontDef) => `
    @font-face {
        font-family: ${fontFamily};
        font-weight: ${fontWeight};
        font-display: fallback;
        src: local("${fontFamily}"),
        url("${url}") format("${format}")
    }
`;

export default (fonts: { [key: string]: FontDef }) => Object.values(fonts).map(createFont).join("");
