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
  return (
    <Box className={className} sx={wrapperStyles}>
      <Header appMode={appMode} toggleMenu={toggleMenu} {...siteMetaData} />
      {children}
      <Footer {...siteMetaData} />
    </Box>
  );
};

export default InnerLayout;
