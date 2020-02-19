/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Heading } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces/src";
import { IProject } from "@offcourse/interfaces/src/pageSection";
import { formatTitle } from "../helpers";
import { Text } from "@offcourse/atoms";
import {
  imageStyles,
  innerStyles,
  captionStyles,
  headerStyles,
  wrapperStyles
} from "./styles";

type ProjectProps = IProject & IThemeable & { index: number };

const Project: FunctionComponent<ProjectProps> = ({
  className,
  children,
  title,
  imageUrl,
  description
}) => {
  return (
    <Box as={"article"} sx={wrapperStyles} className={className}>
      <Box sx={imageStyles}>
        <Box
          sx={{
            ...innerStyles,
            backgroundImage: `url(${imageUrl})`
          }}
        >
          {children}
        </Box>
      </Box>
      <Text sx={captionStyles} html={description} />
      <Heading sx={headerStyles}>{formatTitle(title)}</Heading>
    </Box>
  );
};
export default Project;
