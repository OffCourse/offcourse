/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, NavLink } from "theme-ui";
import { DisplayText } from "@offcourse/atoms";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {
  displayStyles,
  innerWrapper,
  textContainerStyles,
  excerptStyles
} from "./styles";

const Post: FunctionComponent<any> = ({ slug, title, excerpt, body }) => (
  <Box as={"section"}>
    <Box sx={displayStyles}>
      <Box sx={{ ...innerWrapper, alignContent: "end", bg: "transparent" }}>
        <NavLink href={slug}>
          <DisplayText>{title}</DisplayText>
        </NavLink>
      </Box>
    </Box>
    <Box sx={innerWrapper}>
      <Box sx={textContainerStyles}>
        {!body && <p sx={excerptStyles}>{excerpt}</p>}
        {body && <MDXRenderer>{body}</MDXRenderer>}
      </Box>
    </Box>
  </Box>
);

export default Post;
