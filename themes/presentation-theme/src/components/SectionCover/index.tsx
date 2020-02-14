/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { outerWrapper, innerWrapper } from "./styles";

const Cover: FunctionComponent<{ slideData: any }> = ({ children }) => {
  return (
    <Box sx={outerWrapper}>
      <Box sx={innerWrapper}>{children}</Box>
    </Box>
  );
};

export default Cover;
