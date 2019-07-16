import React from "react";
import { Layout, Header, Main, Container, Footer } from "theme-ui";
import ThemeProvider from "../components/ThemeProvider";
import theme from "../theme";

const PageTemplate = ({ children }: { children: any }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header />
        <Main>
          <Container>{children}</Container>
        </Main>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default PageTemplate;
