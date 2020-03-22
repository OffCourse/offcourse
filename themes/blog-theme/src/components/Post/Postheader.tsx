/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, NavLink } from "theme-ui";
import { DisplayText } from "@offcourse/atoms";
import { displayStyles, HeaderTextStyles } from "./styles";
import { IPost } from "@offcourse/interfaces/src";
import Img from "gatsby-image";

type PostHeaderProps = Pick<IPost, "slug" | "title" | "coverImage">;

const PostHeader: FunctionComponent<PostHeaderProps> = ({
  slug,
  title,
  coverImage
}) => {
  return (
    <Box sx={displayStyles}>
      <Img fluid={coverImage} />
      <Box sx={HeaderTextStyles}>
        <NavLink href={slug}>
          <DisplayText>{title}</DisplayText>
        </NavLink>
      </Box>
    </Box>
  );
};

export default PostHeader;
