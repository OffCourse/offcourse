export default {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignContent: "flex-end",
  textAlign: "right",
  h1: {
    fontSize: ["1.5rem", "2rem"],
    lineHeight: ["1.8rem", "2.4rem"],
    mb: ["0.3rem", "0.4rem"],
    mr: 0,
    "&:last-of-type": {
      mb: 0,
      mr: 0
    }
  },
};
