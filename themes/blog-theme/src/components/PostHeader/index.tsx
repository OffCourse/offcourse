/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, NavLink } from "theme-ui";
import BackgroundImage from "gatsby-background-image";
import { DisplayText } from "@offcourse/atoms";
import { IPost, IThemeable } from "@offcourse/interfaces/src";
import SidePanel from "./SidePanel";
import { HeaderAnimation, SidePanelAnimation } from "./animations";
import { headerTextStyles, wrapperStyles, imageStyles } from "./styles";
import PostMeta from "./PostMeta";

type PostHeaderProps = Pick<
  IPost,
  "slug" | "title" | "coverImage" | "excerpt" | "author" | "date" | "tags"
> & { isOdd?: boolean; isFullPost?: boolean };

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
