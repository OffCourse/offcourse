import { SxStyleProp } from "theme-ui";

const stepStyles: SxStyleProp = {
  gridColumn: ["2/9", "2/12", "2/11", "3/10"],
  "&:nth-of-type(even)": {
    gridColumn: ["2/9", "2/12", "3/12", "4/11"],
    textAlign: "end"
  }
};

const innerWrapperStyles: SxStyleProp = {
  gridColumn: "1/13",
  display: "grid",
  gridTemplateColumns: ["repeat(9,1fr)", "repeat(12, 1fr)"]
};

export { stepStyles, innerWrapperStyles };
