import React, { forwardRef } from "react";
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
