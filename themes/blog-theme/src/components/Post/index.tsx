/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import * as components from "./components";
import { IPost } from "@offcourse/interfaces/src";
import PostHeader from "../PostHeader";
import {
  wrapperStyles,
  innerWrapperStyles,
  textContainerStyles,
} from "./styles";

const Post: FunctionComponent<IPost> = ({ body, ...headerProps }) => {
  return (
    <MDXProvider components={components}>
      <Box sx={wrapperStyles} as={"article"}>
        <PostHeader {...headerProps} />
        <Box sx={innerWrapperStyles}>
          <Box sx={textContainerStyles}>
            <MDXRenderer>{body}</MDXRenderer>
          </Box>
        </Box>
      </Box>
    </MDXProvider>
  );
};

export default Post;
