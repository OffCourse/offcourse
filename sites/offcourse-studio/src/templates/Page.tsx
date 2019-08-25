import React, { forwardRef } from "react";
import { Layout, Main, Container } from "theme-ui";
import ThemeProvider from "../components/ThemeProvider";
import Footer from "../components/Footer";
import createTheme from "../theme";
import fonts from "../theme/offcourse-fonts";

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
      <ThemeProvider theme={createTheme({ fonts })}>
        <Layout>
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
