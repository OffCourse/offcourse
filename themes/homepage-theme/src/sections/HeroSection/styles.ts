export default {
  py: "2rem",
  px: 6,
  minHeight: "70vh",
  gridTemplateColumns: ["1fr", "1fr", "4fr 2fr"],
  gridTemplateRows: ["1fr", "1fr", "3fr 1fr"],
};

export const textStyles = {
  gridColumn: "1/2",
  gridRow: "1/2",
  maxWidth: "40rem"
};

export const logoStyles = {
  gridColumn: ["1/2", "1/2", "2/3"],
  gridRow: ["1/2", "1/2", "2/3"],
  h1: {
    fontSize: ["2rem", "3rem"],
    mb: ["0.4rem", "0.6rem"],
    "&:last-of-type": {
      mb: 0,
      mr: 0
    }
  },
};
