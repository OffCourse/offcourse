/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { outerWrapper } from "./styles";
import { useDeck } from "gatsby-theme-mdx-deck";

const SlideMeta: FunctionComponent = () => {
  const { index, length, ...x } = useDeck();
  console.log(x);
  return <Box sx={outerWrapper}>{`${index}/${length}`}</Box>;
};

export default SlideMeta;
