/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, NavLink } from "theme-ui";
import { DisplayText } from "@offcourse/atoms";
import { useMeasure } from "@offcourse/homepage-theme/src/hooks";
import Backdrop from "../Backdrop";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {
  wrapperStyles,
  displayStyles,
  HeaderTextStyles,
  innerWrapperStyles,
  textContainerStyles,
  excerptStyles
} from "./styles";

interface IPost {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
}

type PostHeaderProps = Pick<IPost, "slug" | "title">;

const PostHeader: FunctionComponent<PostHeaderProps> = ({ slug, title }) => {
  const [{ clientWidth: width, clientHeight: height }, bind] = useMeasure();
  return (
    <Box {...bind} sx={displayStyles}>
      <Backdrop width={width} height={height} />
      <Box sx={HeaderTextStyles}>
        <NavLink href={slug}>
          <DisplayText>{title}</DisplayText>
        </NavLink>
      </Box>
    </Box>
  );
};

type PostBodyProps = Pick<IPost, "body" | "excerpt">;

const PostBody: FunctionComponent<PostBodyProps> = ({ body, excerpt }) => {
  return (
    <Box sx={innerWrapperStyles}>
      <Box sx={textContainerStyles}>
        {!body && <p sx={excerptStyles}>{excerpt}</p>}
        {body && <MDXRenderer>{body}</MDXRenderer>}
      </Box>
    </Box>
  );
};

const Post: FunctionComponent<IPost> = ({ slug, title, excerpt, body }) => {
  return (
    <Box sx={wrapperStyles} as={"article"}>
      <PostHeader slug={slug} title={title} />
      <PostBody excerpt={excerpt} body={body} />
    </Box>
  );
};

export default Post;
