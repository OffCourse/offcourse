import React from "react";
import { ThemeProvider, Styled } from "theme-ui";
import { Global, css } from "@emotion/core";

export default ({ children, theme }: { children: any; theme: any }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={css(theme.globals)} />
      <Styled.root>{children}</Styled.root>
    </ThemeProvider>
  );
};
