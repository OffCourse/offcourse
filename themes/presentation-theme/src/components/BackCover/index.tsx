/** @jsx jsx */
import { FunctionComponent, ReactNodeArray } from "react";
import { jsx, Box } from "theme-ui";
import { Logo } from "@offcourse/atoms";
import {
  headlineStyles,
  infoStyles,
  logoStyles,
  outerWrapper,
  footerStyles,
  innerWrapper
} from "./styles";

const BackCover: FunctionComponent<{ children: ReactNodeArray }> = ({
  children
}) => {
  const [title, ...info] = children;
  return (
    <Box sx={outerWrapper}>
      <Box sx={innerWrapper}>
        <Box sx={headlineStyles}>{title}</Box>
        <Box sx={infoStyles}>{info}</Box>
      </Box>
      <Box sx={footerStyles}>
        <a href="https://offcourse-studio.com">
          <Logo sx={logoStyles}>Offcourse Studio_</Logo>
        </a>
      </Box>
    </Box>
  );
};

export default BackCover;
