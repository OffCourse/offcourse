/** @jsx jsx */
import { FunctionComponent, Fragment, ReactNodeArray, Children } from "react";
import { jsx, Box } from "theme-ui";
import { outerWrapper, innerWrapper } from "./styles";
import SlideMeta from "../SlideMeta";

const List: FunctionComponent<{
  children: ReactNodeArray[];
  slideData: any;
}> = ({ children, slideData }) => {
  return (
    <Box sx={outerWrapper}>
      <dl sx={innerWrapper}>{children}</dl>
      <SlideMeta slideData={slideData} />
    </Box>
  );
};

export default List;
