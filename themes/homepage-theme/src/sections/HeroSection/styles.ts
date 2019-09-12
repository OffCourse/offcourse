export default {
  py: "2rem",
  minHeight: "70vh",
  gridTemplateRows: ["1fr", "1fr", "3fr 1fr"],
};

export const textStyles = {
  gridColumn: ["1/10", "1/6"],
  px: 6,
  gridRow: "1/2",
  maxWidth: "40rem"
};

export const logoStyles = {
  gridColumn: ["1/10", "1/10", "7/10"],
  gridRow: ["1/2", "1/2", "2/3"],
  px: 6,
  h1: {
    fontSize: ["2rem", "3rem"],
    mb: ["0.4rem", "0.6rem"],
    "&:last-of-type": {
      mb: 0,
      mr: 0
    }
  },
};
