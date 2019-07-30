import React, { forwardRef } from "react";
import { Layout, Header, Main, Container, Footer } from "theme-ui";
import ThemeProvider from "../components/ThemeProvider";
import createTheme from "../theme";
import fonts from "../theme/offcourse-fonts";
import styled from "@emotion/styled";

const PageTemplate = forwardRef(
  (
    {
      className,
      children
    }: {
      className: string;
      children: any;
    },
    ref: any
  ) => {
    console.log(ref);
    return (
      <ThemeProvider className={className} theme={createTheme({ fonts })}>
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
