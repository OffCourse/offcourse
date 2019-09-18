import React, { forwardRef } from "react";
import { Global } from "@emotion/core";
import { Layout, Main, Container } from "theme-ui";
import theme from "../theme";

const PageTemplate = forwardRef(
  (
    {
      children
    }: {
      className?: string;
      children: any;
    },
    ref: any
  ) => {
    return (
      <Layout>
        <Global styles={theme.globals} />
        <Main>
          <Container>
            <div ref={ref}>{children}</div>
          </Container>
        </Main>
      </Layout>
    );
  }
);

export default PageTemplate;
