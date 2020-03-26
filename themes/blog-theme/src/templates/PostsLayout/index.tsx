/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { graphql } from "gatsby";
import Layout from "../../templates/Page";
import Post from "../../components/Post";
import { postListStyles, postListItemStyles } from "./styles";

type PostPageProps = {
  data: any;
  path: string;
  location: any;
  uri: string;
  pathContext: any;
  pageContext: any;
  pageResources: any;
  navigate: any;
};

export const query = graphql`
  query PostsQuery {
    allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
      edges {
        node {
          id
          coverImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          excerpt
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          tags
        }
      }
    }
  }
`;

const posts: FunctionComponent<PostPageProps> = ({ data, ...props }) => {
  const { allBlogPost } = data;
  const entries = allBlogPost.edges.map(({ node }: any) => ({
    ...node,
    coverImage: node.coverImage.childImageSharp.fluid
  }));
  return (
    <Layout {...props}>
      <Box as="ul" sx={postListStyles}>
        {entries.map(({ id, ...entry }: any) => (
          <Box as="li" key={id} sx={postListItemStyles}>
            <Post {...entry} />
          </Box>
        ))}
      </Box>
    </Layout>
  );
};

export default posts;
