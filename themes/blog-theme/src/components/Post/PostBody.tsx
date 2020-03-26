/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import {
  innerWrapperStyles,
  textContainerStyles,
  excerptStyles
} from "./styles";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { IPost } from "@offcourse/interfaces/src";
// @ts-ignore
import { MDXProvider } from "@mdx-js/react";
import * as components from "./components";

type PostBodyProps = Pick<IPost, "body" | "excerpt">;

const PostBody: FunctionComponent<PostBodyProps> = ({ body, excerpt }) => {
  return (
    <Box sx={innerWrapperStyles}>
      <Box sx={textContainerStyles}>
        {!body && <p sx={excerptStyles}>{excerpt}</p>}
        <MDXProvider components={components}>
          {body && <MDXRenderer>{body}</MDXRenderer>}
        </MDXProvider>
      </Box>
    </Box>
  );
};

export default PostBody;
