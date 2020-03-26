/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, NavLink } from "theme-ui";
import BackgroundImage from "gatsby-background-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import * as components from "./components";
import { DisplayText } from "@offcourse/atoms";
import { motion } from "framer-motion";
import { IPost } from "@offcourse/interfaces/src";
import {
  HeaderTextStyles,
  imageStyles,
  wrapperStyles,
  innerWrapperStyles,
  textContainerStyles
} from "./styles";

const Post: FunctionComponent<IPost> = ({
  slug,
  title,
  excerpt,
  expanded = false,
  body,
  coverImage
}) => {
  return (
    <MDXProvider components={components}>
      <Box sx={wrapperStyles} as={"article"}>
        <BackgroundImage style={imageStyles} fluid={coverImage}>
          <Box sx={HeaderTextStyles}>
            <NavLink href={slug}>
              <DisplayText>{title}</DisplayText>
            </NavLink>
          </Box>
        </BackgroundImage>
        {body && (
          <Box sx={innerWrapperStyles}>
            <Box sx={textContainerStyles}>
              <MDXRenderer>{body}</MDXRenderer>
            </Box>
          </Box>
        )}
      </Box>
    </MDXProvider>
  );
};

export default Post;
