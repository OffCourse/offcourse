import React, { forwardRef } from "react";
import { Layout, Main, Container, Footer } from "theme-ui";
import ThemeProvider from "../components/ThemeProvider";
import Header from "../components/Header";
import Logo from "../components/Logo";
import createTheme from "../theme";
import fonts from "../theme/offcourse-fonts";
import { IPageSection, IStylable } from "../interfaces";

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
          <Header />
          <Main>
            <Container>
              <div ref={ref}>{children}</div>
            </Container>
          </Main>
          <Footer>
            <Logo />
          </Footer>
        </Layout>
      </ThemeProvider>
    );
  }
);

export default PageTemplate;
