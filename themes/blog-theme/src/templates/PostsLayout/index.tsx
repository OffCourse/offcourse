/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import Layout from "../../templates/Page";
import Post from "../../components/Post";
import { graphql } from "gatsby";
import { ListAnimation, ListItemAnimation } from "./animations";

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
export const postQuery = graphql`
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
    coverImage: node.coverImage.childImageSharp.fluid,
  }));
  return (
    <Layout {...props}>
      <ListAnimation>
        {entries.map(({ id, ...entry }: any, index: number) => (
          <ListItemAnimation index={index} id={id}>
            <Post {...entry} />
          </ListItemAnimation>
        ))}
      </ListAnimation>
    </Layout>
  );
};

export default posts;
