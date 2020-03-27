/** @jsx jsx */
import { FunctionComponent, useCallback } from "react";
import { jsx, Box } from "theme-ui";
import { IThemeable, IPageData } from "@offcourse/interfaces/src";
import { Header, Footer } from "@offcourse/molecules";
import { wrapperStyles } from "./styles";
import { useStateValue } from "../PageLayout/state";

type PageLayoutProps = IPageData & IThemeable;

const InnerLayout: FunctionComponent<PageLayoutProps> = ({
  className,
  children,
}) => {
  const { send, current, callToActionVisible, siteMetaData } = useStateValue();
  const toggleMenu = useCallback(() => send({ type: "TOGGLE" }), [send]);
  const appMode = current.toStrings()[0];
  return (
    <Box className={className} sx={wrapperStyles}>
      <Header
        key="header"
        appMode={appMode}
        toggleMenu={toggleMenu}
        callToActionVisible={callToActionVisible}
        {...siteMetaData}
      />
      {children}
      <Footer {...siteMetaData} />
    </Box>
  );
};

export default InnerLayout;
