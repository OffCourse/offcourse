/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { wrapperStyles } from "./styles";
import PostBody from "./PostBody";
import PostHeader from "./Postheader";
import { IPost } from "@offcourse/interfaces/src";

const Post: FunctionComponent<IPost> = ({
  slug,
  title,
  excerpt,
  body,
  coverImage
}) => {
  return (
    <Box sx={wrapperStyles} as={"article"}>
      <PostHeader slug={slug} title={title} coverImage={coverImage} />
      <PostBody excerpt={excerpt} body={body} />
    </Box>
  );
};

export default Post;
