import React, { forwardRef } from "react";
import { Global } from "@emotion/core";
import { Layout, Main, Container } from "theme-ui";

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
        <Global styles={theme => theme.globals} />
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
