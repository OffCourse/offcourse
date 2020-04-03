/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import Layout from "../../templates/Page";
import Post from "../../components/Post";

export const query = graphql`
  query PostPageQuery($id: String!, $previousId: String, $nextId: String) {
    blogPost(id: { eq: $id }) {
      id
      coverImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      excerpt
      author
      body
      slug
      title
      tags
      keywords
      date(formatString: "MMMM DD, YYYY")
    }
    previous: blogPost(id: { eq: $previousId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
    next: blogPost(id: { eq: $nextId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
  }
`;

const PostLayout: FunctionComponent = ({ data, ...props }: any) => {
  const { coverImage, ...blogPost } = data.blogPost;
  const post = { ...blogPost, coverImage: coverImage.childImageSharp.fluid };
  return (
    <Layout pageData={post} {...props}>
      <Post isFullPost {...post} />
    </Layout>
  );
};

export default PostLayout;
