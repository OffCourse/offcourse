/** @jsx jsx */
import { forwardRef } from "react";
import { jsx } from "theme-ui";
import { Global } from "@emotion/core";
import { Header, Footer } from "@offcourse/molecules";
import { Box } from "theme-ui";
import { useSiteMetaData } from "../../hooks";

const wrapperStyles = {
  display: "grid",
  minHeight: "100vh"
};

const PageTemplate = forwardRef(
  (
    {
      children,
      className
    }: {
      className?: string;
      children: any;
    },
    ref: any
  ) => {
    const {
      siteName,
      contactInfo
    }: {
      siteName: string;
      contactInfo: any;
    } = useSiteMetaData();
    return (
      <Box sx={wrapperStyles}>
        <Global styles={theme => theme.globals} />
        <Header />
        <Box className={className}>
          <div ref={ref}>{children}</div>
        </Box>
        <Footer siteName={siteName} contactInfo={contactInfo} />
      </Box>
    );
  }
);

export default PageTemplate;
