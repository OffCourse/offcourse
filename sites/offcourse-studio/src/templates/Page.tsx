import React from "react";
import { Layout, Header, Main, Container, Footer } from "theme-ui";
import ThemeProvider from "../components/ThemeProvider";
import createTheme from "../theme";
import fonts from "../theme/offcourse-fonts";

const PageTemplate = ({
  className,
  children
}: {
  className: string;
  children: any;
}) => {
  return (
    <ThemeProvider className={className} theme={createTheme({ fonts })}>
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
