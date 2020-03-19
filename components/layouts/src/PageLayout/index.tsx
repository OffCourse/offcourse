/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { Global } from "@emotion/core";
import { IThemeable, IPageData } from "@offcourse/interfaces/src";
import { StateProvider, useStateValue } from "./state";
import InnerLayout from "./InnerLayout";

type PageLayoutProps = IPageData & { path: string } & IThemeable;

const PageLayout: FunctionComponent<PageLayoutProps> = ({
  className,
  children,
  siteMetaData,
  path
}) => {
  return (
    <StateProvider path={path} siteMetaData={siteMetaData}>
      <Global styles={theme => theme.globals} />
      <InnerLayout className={className} siteMetaData={siteMetaData}>
        {children}
      </InnerLayout>
    </StateProvider>
  );
};

export { useStateValue };

export default PageLayout;
