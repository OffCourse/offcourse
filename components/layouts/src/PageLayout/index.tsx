/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { Global } from "@emotion/core";
import { IThemeable, IPageData } from "@offcourse/interfaces/src";
import { Header, Footer } from "@offcourse/molecules";
import { wrapperStyles } from "./styles";

type PageLayoutProps = {
  mode: "menuOpen" | "default";
  toggleMenu: () => void;
} & IPageData &
  IThemeable;

const PageLayout: FunctionComponent<PageLayoutProps> = ({
  className,
  children,
  mode,
  toggleMenu,
  siteMetaData
}) => {
  const { links, callToAction, siteName, contactInfo } = siteMetaData;
  return (
    <Box className={className} sx={wrapperStyles}>
      <Global styles={theme => theme.globals} />
      <Header
        mode={mode}
        toggleMenu={toggleMenu}
        links={links}
        callToAction={callToAction}
      />
      {children}
      <Footer siteName={siteName} contactInfo={contactInfo} />
    </Box>
  );
};

export default PageLayout;
