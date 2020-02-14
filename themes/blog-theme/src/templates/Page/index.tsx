/** @jsx jsx */
import { forwardRef } from "react";
import { jsx } from "theme-ui";
import { Global } from "@emotion/core";
import { Logo } from "@offcourse/atoms";
import { Box } from "theme-ui";

const wrapperStyles = {
  display: "grid",
  minHeight: "100vh",
  bg: "black"
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
        <a sx={{ position: "fixed", right: 0, p: 4 }} href="/">
          <Logo sx={{ textAlign: "right" }}>Offcourse Studio_</Logo>
        </a>
        <Global styles={theme => theme.globals} />
        <Box className={className}>
          <div ref={ref}>{children}</div>
        </Box>
      </Box>
    );
  }
);

export default PageTemplate;
