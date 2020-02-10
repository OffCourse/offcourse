/** @jsx jsx */
import { FunctionComponent, ReactNodeArray } from "react";
import { jsx, Box } from "theme-ui";
import { outerWrapper, innerWrapper, footerStyles } from "./styles";

const Agenda: FunctionComponent<{
  children: ReactNodeArray;
  slideData: any;
}> = ({ children, slideData }) => {
  return (
    <Box sx={outerWrapper}>
      <div sx={innerWrapper}>{children}</div>
      <Box sx={footerStyles}>{`${slideData.index}/${slideData.total}`}</Box>
    </Box>
  );
};

export default Agenda;
