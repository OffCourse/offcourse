export default {
  display: "flex",
  boxSizing: "border-box",
  userSelect: "none",
  textDecoration: "inherit",
  alignItems: "center",
  height: "2.813rem",
  justifyContent: "center",
  backgroundColor: "primary",
  color: "negative",
  border: 0,
  borderBottom: "0.125rem solid",
  borderColor: "grayScale.4",
  paddingTop: 4,
  paddingBottom: 4,
  paddingLeft: 6,
  paddingRight: 6,
  fontFamily: "heading",
  fontSize: 1,
  lineHeight: 2,
  width: "100%",
  ":focus": {
    outline: "none"
  },
  "&:hover": {
    backgroundColor: "secondary"
  },
  "&:disabled, &:hover:disabled": {
    cursor: "default",
    backgroundColor: "grayScale.2",
    color: "grayScale.1",
    borderColor: "grayScale.1"
  }
};
