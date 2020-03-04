/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { IThemeable, IPageData } from "@offcourse/interfaces/src";
import { Header, Footer } from "@offcourse/molecules";
import { wrapperStyles } from "./styles";
import { useStateValue } from "../PageLayout/state";

type PageLayoutProps = IPageData & IThemeable;

const InnerLayout: FunctionComponent<PageLayoutProps> = ({
  className,
  children
}) => {
  const { toggleMenu, appMode, siteMetaData } = useStateValue();
  const { links, siteName, contactInfo, callToAction } = siteMetaData;
  return (
    <Box className={className} sx={wrapperStyles}>
      <Header
        mode={appMode}
        toggleMenu={toggleMenu}
        links={links}
        callToAction={callToAction}
      />
      {children}
      <Footer siteName={siteName} contactInfo={contactInfo} />
    </Box>
  );
};

export default InnerLayout;
