/** @jsx jsx */
import { FunctionComponent, useState } from "react";
import { jsx, Box, NavLink } from "theme-ui";
import BackgroundImage from "gatsby-background-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import * as components from "./components";
import { DisplayText } from "@offcourse/atoms";
import { IPost } from "@offcourse/interfaces/src";
import { HeaderAnimation } from "./animations";
import {
  HeaderTextStyles,
  imageStyles,
  wrapperStyles,
  innerWrapperStyles,
  textContainerStyles,
} from "./styles";

const Post: FunctionComponent<IPost> = ({
  slug,
  title,
  body,
  date,
  tags,
  coverImage,
  excerpt,
}) => {
  const isFullPost = !!body;
  return (
    <MDXProvider components={components}>
      <Box sx={wrapperStyles} as={"article"}>
        <HeaderAnimation isFullPost={isFullPost}>
          <Box
            sx={{
              position: "absolute",
              height: isFullPost ? "32rem" : "100%",
              top: 0,
              bottom: 0,
              p: 6,
              display: "flex",
              left: "-15rem",
              width: "15rem",
              bg: "black",
            }}
          />
          <BackgroundImage style={{ ...imageStyles }} fluid={coverImage}>
            <Box sx={HeaderTextStyles}>
              <NavLink href={slug}>
                <DisplayText>{title}</DisplayText>
              </NavLink>
            </Box>
          </BackgroundImage>
          <Box
            sx={{
              position: "absolute",
              height: isFullPost ? "32rem" : "100%",
              top: 0,
              bottom: 0,
              p: 6,
              display: "flex",
              right: "-15rem",
              width: "15rem",
              bg: "black",
            }}
          >
            <p sx={{ color: "white" }}>
              {isFullPost ? JSON.stringify({ date, tags }, null, 2) : excerpt}
            </p>
          </Box>
        </HeaderAnimation>
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
