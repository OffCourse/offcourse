/** @jsx jsx */
import { forwardRef } from "react";
import { jsx } from "theme-ui";
import { Global } from "@emotion/core";
import { Logo } from "@offcourse/atoms";
import { Box, Container } from "theme-ui";

const wrapperStyles = {
  display: "grid",
  minHeight: "100vh",
  justifyContent: "center",
  bg: "primary"
};

const PageTemplate = forwardRef(
  (
    {
      children,
      className
    }: {
      className?: string;
      children: any;
    },
    ref: any
  ) => {
    return (
      <Box sx={wrapperStyles}>
        <a sx={{ p: 4 }} href="/">
          <Logo>Offcourse Studio_</Logo>
        </a>
        <Global styles={theme => theme.globals} />
        <Box className={className}>
          <Container>
            <div ref={ref}>{children}</div>
          </Container>
        </Box>
      </Box>
    );
  }
);

export default PageTemplate;
