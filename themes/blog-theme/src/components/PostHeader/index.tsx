/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, NavLink } from "theme-ui";
import BackgroundImage from "gatsby-background-image";
import { DisplayText, Text } from "@offcourse/atoms";
import { IPost, IThemeable } from "@offcourse/interfaces/src";
import SidePanel from "./SidePanel";
import { HeaderAnimation, SidePanelAnimation } from "./animations";
import {
  headerTextStyles,
  wrapperStyles,
  definitionStyles,
  metaStyles,
  tagStyles,
  imageStyles,
  excerptStyles,
} from "./styles";

type PostHeaderProps = Pick<
  IPost,
  "slug" | "title" | "coverImage" | "excerpt"
> & { isOdd?: boolean; isFullPost?: boolean };

const Excerpt: FunctionComponent<{ children: string }> = ({ children }) => {
  return <Text sx={excerptStyles}>{children}</Text>;
};

const PostMeta: FunctionComponent<any> = ({
  author,
  date,
  tags,
  excerpt,
  mode = "tags",
}) => {
  return (
    <Box sx={metaStyles}>
      {mode === "tags" ? (
        <Box sx={{ display: "block", textAlign: "right" }}>
          {tags.map((tag: string) => (
            <Text sx={tagStyles}>{tag}</Text>
          ))}
        </Box>
      ) : (
        <Excerpt>{excerpt}</Excerpt>
      )}
      <dl sx={definitionStyles}>
        <dt>Author</dt>
        <dd>{author}</dd>
        <dt>Date</dt>
        <dd>{date}</dd>
      </dl>
    </Box>
  );
};

const PostHeader: FunctionComponent<PostHeaderProps & IThemeable> = ({
  slug,
  title,
  coverImage,
  isOdd = true,
  isFullPost = false,
  ...rest
}) => {
  return (
    <HeaderAnimation isOdd={isOdd}>
      <Box sx={wrapperStyles}>
        <SidePanel side="left"></SidePanel>
        <BackgroundImage sx={imageStyles} fluid={coverImage}>
          <Box sx={headerTextStyles}>
            <NavLink href={slug}>
              <DisplayText>{title}</DisplayText>
            </NavLink>
          </Box>
          <SidePanel side="right">
            <SidePanelAnimation>
              <PostMeta mode={isFullPost ? "tags" : "excerpt"} {...rest} />
            </SidePanelAnimation>
          </SidePanel>
        </BackgroundImage>
      </Box>
    </HeaderAnimation>
  );
};

export default PostHeader;
