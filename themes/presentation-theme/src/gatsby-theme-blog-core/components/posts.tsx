/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Styled, NavLink } from "theme-ui";
import Page from "../../templates/Page";
import { Box } from "theme-ui";

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

const ListItem: FunctionComponent<any> = ({ slug, title, excerpt }) => (
  <li
    sx={{
      listStyle: "none",
      bg: "white",
      mb: 6
    }}
  >
    <section>
      <Box sx={{ bg: "black", height: "32rem" }} />
      <Box
        sx={{
          p: 6,
          justifyContent: "stretch",
          display: "grid"
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "minmax(auto, 60rem)",
            justifyContent: "center"
          }}
        >
          <Box sx={{ width: "100%", maxWidth: "60rem" }}>
            <NavLink href={slug}>
              <Styled.h1>{title}</Styled.h1>
            </NavLink>
            <p>{excerpt}</p>
          </Box>
        </Box>
      </Box>
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
