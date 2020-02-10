/** @jsx jsx */
import { FunctionComponent, ReactNodeArray } from "react";
import { jsx, Box } from "theme-ui";
import Logo from "@offcourse/atoms/src/components/Logo";
import {
  headlineStyles,
  imageStyles,
  logoStyles,
  outerWrapper,
  footerStyles,
  innerWrapper
} from "./styles";

const Cover: FunctionComponent<{ children: ReactNodeArray }> = ({
  children
}) => {
  const [title, image] = children;
  return (
    <Box sx={outerWrapper}>
      <div sx={innerWrapper}>
        <div sx={headlineStyles}>{title}</div>
        <div sx={imageStyles}>{image}</div>
      </div>
      <Box sx={footerStyles}>
        <a href="https://offcourse-studio.com">
          <Logo sx={logoStyles}>Offcourse Studio_</Logo>
        </a>
      </Box>
    </Box>
  );
};

export default Cover;
