/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import Layout from "../../templates/Page";
import Post from "../../components/Post";

const PostLayout: FunctionComponent = ({ data, ...props }: any) => {
  const blogPost = data.blogPost;
  return (
    <Layout {...props}>
      <Post {...blogPost} />
    </Layout>
  );
};

export default PostLayout;
