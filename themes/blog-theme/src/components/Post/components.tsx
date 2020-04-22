/** @jsx jsx */
import { jsx, Box } from "theme-ui";

const comp = (as = "div", sx: any) => (props: any) => (
  <Box as={as} sx={sx} {...props} />
);

const blockquoteStyles = {
  m: 0,
  my: [4, 6],
  textAlign: "right",
  "> p": {
    margin: 0,
    fontSize: [1, 1, 2, 2],
    lineHeight: [1, 1, 2, 2],
    "&:last-child": {
      mt: [2, 4],
    },
  },
};

const pStyles = {
  fontSize: [2, 2, 3, 3],
  lineHeight: [3, 3, 4, 4],
  mb: 4,
};

const h3Styles = {
  ...pStyles,
  fontFamily: "heading",
  mt: 6,
};

const aStyles = {
  fontsize: [1, 1, 2, 2],
  color: "grayScale.3",
  fontFamily: "heading",
  textDecoration: "none",
  "&:hover": {
    color: "grayScale.4",
  },
  "&:active": {},
  "&:visited": {},
};

const h2Styles = {
  fontSize: [3, 3, 4, 4],
  fontFamily: "heading",
  mt: 8,
  mb: 4,
};

const hrStyles = {
  mt: 8,
};
const preStyles = {
  p: 6,
  bg: "black",
  mb: 4,
};

const a = (props) => <a sx={aStyles} {...props} />;
const pre = comp("pre", preStyles);
const p = comp("p", pStyles);
const h2 = comp("h2", h2Styles);
const h3 = comp("h3", h3Styles);
const hr = comp("hr", hrStyles);
const blockquote = comp("blockquote", blockquoteStyles);

export { blockquote, p, pre, h2, h3, a, hr };
