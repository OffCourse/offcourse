/** @jsx jsx */
import { FunctionComponent, ReactNodeArray } from "react";
import { jsx, Box } from "theme-ui";
import { outerWrapper, innerWrapper } from "./styles";
import SlideMeta from "../SlideMeta";

const Table: FunctionComponent<{
  children: ReactNodeArray;
  slideData: any;
}> = ({ children, slideData }) => {
  const [title, ...table] = children;
  return (
    <Box sx={outerWrapper}>
      <Box sx={innerWrapper}>{table}</Box>
      <SlideMeta slideData={slideData} />
    </Box>
  );
};

export default Table;
