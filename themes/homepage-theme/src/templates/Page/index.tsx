import React, { forwardRef } from "react";
import { Global } from "@emotion/core";
import { Box, Container } from "theme-ui";

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
      <Box>
        <Global styles={(theme) => theme.globals} />
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
