/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { Heading } from "@offcourse/atoms";
import { IThemeable, IProject, IIndexable } from "@offcourse/interfaces/src";
import { Text } from "@offcourse/atoms";
import {
  imageStyles,
  innerStyles,
  captionStyles,
  headerStyles,
  wrapperStyles
} from "./styles";

type ProjectProps = IProject & IThemeable & IIndexable;

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
      <Heading sx={headerStyles}>{title}</Heading>
    </Box>
  );
};
export default Project;
