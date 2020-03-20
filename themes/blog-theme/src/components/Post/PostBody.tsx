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

type PostBodyProps = Pick<IPost, "body" | "excerpt">;

const PostBody: FunctionComponent<PostBodyProps> = ({ body, excerpt }) => {
  return (
    <Box sx={innerWrapperStyles}>
      <Box sx={textContainerStyles}>
        {!body && <p sx={excerptStyles}>{excerpt}</p>}
        {body && <MDXRenderer>{body}</MDXRenderer>}
      </Box>
    </Box>
  );
};

export default PostBody;
