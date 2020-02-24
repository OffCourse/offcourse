/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { Global } from "@emotion/core";
import { Header, Footer } from "@offcourse/molecules";
import { Box } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces/src";
import { wrapperStyles } from "./styles";

type PageLayoutProps = { siteName: string; contactInfo: any } & IThemeable;

const PageLayout: FunctionComponent<PageLayoutProps> = ({
  className,
  children,
  siteName,
  contactInfo
}) => {
  return (
    <Box className={className} sx={wrapperStyles}>
      <Global styles={theme => theme.globals} />
      <Header />
      {children}
      <Footer siteName={siteName} contactInfo={contactInfo} />
    </Box>
  );
};

export default PageLayout;
