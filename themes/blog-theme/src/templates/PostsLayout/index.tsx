/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import Layout from "../../templates/Page";
import Post from "../../components/Post";

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

const ListItem: FunctionComponent<any> = post => (
  <li
    sx={{
      listStyle: "none",
      mb: 6
    }}
  >
    <Post {...post} />
  </li>
);

const posts: FunctionComponent<PostPageProps> = ({ data, ...props }) => {
  const { allBlogPost } = data;
  const entries = allBlogPost.edges.map(({ node }: any) => node);
  return (
    <Layout {...props}>
      <ul sx={{ m: 0, p: 0 }}>
        {entries.map(({ id, ...entry }: any) => (
          <ListItem key={id} {...entry} />
        ))}
      </ul>
    </Layout>
  );
};

export default posts;
