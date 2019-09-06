export const wrapperStyles = {
  display: "grid",
  "&:nth-of-type(odd)": {
    bg: "primary"
  }
};

export const headerStyles = {};

export const captionStyles = {
  display: "grid",
  p: "2rem",
  gridGap: "1rem",
  alignItems: "end"
};

export const imageStyles = {
  paddingTop: "100%",
  position: "relative"
};

export const innerStyles = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  img: {
    width: "100%"
  }
};
