export const wrapperStyles = {
  display: "grid",
  gridTemplateColumns: ["repeat(12, 1fr)"],
  px: [4, 5],
  py: [5, 5],
  gridColumnGap: [2, 4, 6, 7],
  bg: "grayScale.1"
};

export const innerWrapperStyles = {
  gridColumn: ["1/13", "1/13", "1/13", "2/12"],
  display: "grid",
  gridColumnGap: [2, 4, 6, 7],
  gridTemplateColumns: ["repeat(9, 1fr)", "repeat(12, 1fr)"]
};
