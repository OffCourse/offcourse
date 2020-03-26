/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { Link } from "gatsby";
const comp = (as = "div", sx) => (props: any) => (
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
      mt: [2, 4]
    }
  }
};

const pStyles = {
  fontSize: [2, 2, 3, 3],
  lineHeight: [3, 3, 4, 4],
  mb: 4
};

const aStyles = {
  fontsize: [1, 1, 2, 2],
  color: "grayScale.3",
  fontFamily: "heading",
  textDecoration: "none",
  "&:hover": {
    color: "grayScale.4"
  },
  "&:active": {},
  "&:visited": {}
};

const h2Styles = {
  fontSize: [3, 3, 4, 4],
  fontFamily: "heading",
  mt: 8,
  mb: 4
};

const a = comp(Link, aStyles);
const p = comp("p", pStyles);
const h2 = comp("h2", h2Styles);
const blockquote = comp("blockquote", blockquoteStyles);

export { blockquote, p, h2, a };
