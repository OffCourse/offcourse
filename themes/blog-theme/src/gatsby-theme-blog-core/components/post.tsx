/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import Page from "../../templates/Page";
import Post from "../../components/Post";

const post: FunctionComponent = ({ pageResources, data }: any) => {
  const blogPost = data.blogPost;
  return (
    <Page>
      <Post {...blogPost} />
    </Page>
  );
};

export default post;
