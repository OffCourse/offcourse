/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, NavLink } from "theme-ui";
import BackgroundImage from "gatsby-background-image";
import { DisplayText } from "@offcourse/atoms";
import { IPost, IThemeable } from "@offcourse/interfaces/src";
import SidePanel from "./SidePanel";
import { HeaderAnimation, SidePanelAnimation } from "./animations";
import { headerTextStyles, wrapperStyles, imageStyles } from "./styles";

type PostHeaderProps = Pick<
  IPost,
  "slug" | "title" | "coverImage" | "excerpt"
> & { isOdd?: boolean };

const PostHeader: FunctionComponent<PostHeaderProps & IThemeable> = ({
  slug,
  title,
  coverImage,
  isOdd = true,
  excerpt,
}) => {
  return (
    <HeaderAnimation isOdd={isOdd}>
      <Box sx={wrapperStyles}>
        <SidePanel side="left">
          <SidePanelAnimation>
            <p sx={{ color: "white" }}>{excerpt}</p>
          </SidePanelAnimation>
        </SidePanel>
        <BackgroundImage sx={imageStyles} fluid={coverImage}>
          <Box sx={headerTextStyles}>
            <NavLink href={slug}>
              <DisplayText>{title}</DisplayText>
            </NavLink>
          </Box>
          <SidePanel side="right">
            <SidePanelAnimation>
              <p sx={{ color: "white" }}>{excerpt}</p>
            </SidePanelAnimation>
          </SidePanel>
        </BackgroundImage>
      </Box>
    </HeaderAnimation>
  );
};

export default PostHeader;
