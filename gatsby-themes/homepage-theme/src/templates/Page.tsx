import React, { forwardRef } from "react";
import { Layout, Main, Container } from "theme-ui";
import ThemeProvider from "../providers/ThemeProvider";
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
      <ThemeProvider theme={theme}>
        <Layout>
          <Main>
            <Container>
              <div ref={ref}>{children}</div>
            </Container>
          </Main>
        </Layout>
      </ThemeProvider>
    );
  }
);

export default PageTemplate;
