export const checkboxStyles = {
  "WebkitAppearance": "none",
  "MozAppearance": "none",
  appearance: "none",
  bg: "grayScale.1",
  margin: 0,
  height: "1.5rem",
  width: "1.5rem",
  cursor: "pointer",
  outline: "none",
  ":checked": {
    backgroundColor: "primary"
  },
};

export const wrapperStyles = {
  display: "grid",
  gridGap: "0.75rem",
  gridTemplateColumns: "1.5rem 1fr",
  alignItems: "center"
};

export const labelStyles = {
  fontFamily: "heading",
  fontSize: 0,
  lineHeight: 0,
  pt: 0,
  userSelect: "none",
};
