import Layout from "../../templates/Page";
import { FunctionComponent } from "react";
import { Box } from "theme-ui";
import { Link } from "gatsby";

const Decks: FunctionComponent = ({ decks, ...props }) => {
  return (
    <Layout {...props}>
      <Box sx={{ m: 8, bg: "white" }}>
        <ul>
          {decks.map(({ title, slug }) => (
            <Link to={slug}>
              <Box>{title}</Box>
            </Link>
          ))}
        </ul>
      </Box>
    </Layout>
  );
};

export default Decks;
