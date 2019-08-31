import React, { forwardRef } from "react";
import { Layout, Main, Container } from "theme-ui";
import ThemeProvider from "../providers/ThemeProvider";
import createTheme from "../theme";

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
      <ThemeProvider theme={createTheme({})}>
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
