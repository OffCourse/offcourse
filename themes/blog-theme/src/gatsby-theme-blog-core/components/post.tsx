/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Heading, Box } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";

const post: FunctionComponent = ({ pageResources, data, ...props }: any) => {
  const { body, title, ...post } = data.blogPost;
  return (
    <Box sx={{ m: 6 }}>
      <Heading as="h1" sx={{ mb: 6 }}>
        {title}
      </Heading>
      <MDXRenderer>{body}</MDXRenderer>;
    </Box>
  );
};

export default post;
