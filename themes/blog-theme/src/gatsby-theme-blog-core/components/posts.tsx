/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import Page from "../../templates/Page";
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
    <section>
      <Post {...post} />
    </section>
  </li>
);

const posts: FunctionComponent<PostPageProps> = ({
  data,
  path,
  location,
  uri,
  pathContext,
  pageResources,
  pageContext,
  navigate
}) => {
  const { allBlogPost, site } = data;
  const entries = allBlogPost.edges.map(({ node }: any) => node);
  return (
    <Page>
      <ul sx={{ m: 0, p: 0 }}>
        {entries.map(({ id, ...entry }: any) => (
          <ListItem key={id} {...entry} />
        ))}
      </ul>
    </Page>
  );
};

export default posts;
