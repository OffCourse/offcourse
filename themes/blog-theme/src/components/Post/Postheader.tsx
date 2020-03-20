/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, NavLink } from "theme-ui";
import { DisplayText } from "@offcourse/atoms";
import { useMeasure } from "@offcourse/homepage-theme/src/hooks";
import Backdrop from "../Backdrop";
import { displayStyles, HeaderTextStyles } from "./styles";
import { IPost } from "@offcourse/interfaces/src";

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

export default PostHeader;
