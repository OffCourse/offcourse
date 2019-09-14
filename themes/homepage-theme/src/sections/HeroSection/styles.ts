export const wrapperStyles = {
  height: ["100vh", "100vh", "100vh", "70vh"],
  gridTemplateRows: "3fr 1fr"

};

export const textStyles = {
  display: "grid",
  gridColumn: ["1/10", "1/6"],
  px: "2rem",
  py: "2rem",
  alignContent: "center",
  gridRow: "1/2",
  maxWidth: "40rem"
};

export const logoContainerStyles = {
  display: "grid",
  gridColumn: ["1/10", "1/10", "7/10"],
  gridRow: ["2/3"],
  px: "2rem",
  py: "2rem",
  alignContent: "end",
}

export const logoStyles = {
  mr: 0,
  h1: {
    fontSize: ["2rem", "3rem"],
    mb: ["0.4rem", "0.6rem"],
    mr: 0,
    "&:last-of-type": {
      mb: 0,
    }
  },
};
