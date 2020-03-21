/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import Layout from "../../templates/Page";
import Post from "../../components/Post";
import Img from "gatsby-image"; // to take image data and render it

const PostLayout: FunctionComponent = ({ data, ...props }: any) => {
  const blogPost = data.blogPost;
  return (
    <Layout {...props}>
      <Img fluid={data.blogPost.coverImage.childImageSharp.fluid} />
      <Post {...blogPost} />
    </Layout>
  );
};

export default PostLayout;
