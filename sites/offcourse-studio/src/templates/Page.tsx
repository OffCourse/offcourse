import React, { forwardRef } from "react";
import { Layout, Header, Main, Container, Footer } from "theme-ui";
import ThemeProvider from "../components/ThemeProvider";
import createTheme from "../theme";
import fonts from "../theme/offcourse-fonts";

const PageTemplate = forwardRef(
  (
    {
      children
    }: {
      className: string;
      children: any;
    },
    ref: any
  ) => {
    return (
      <ThemeProvider theme={createTheme({ fonts })}>
        <Layout>
          <Header />
          <Main>
            <Container>
              <div ref={ref}>{children}</div>
            </Container>
          </Main>
          <Footer />
        </Layout>
      </ThemeProvider>
    );
  }
);

export default PageTemplate;
