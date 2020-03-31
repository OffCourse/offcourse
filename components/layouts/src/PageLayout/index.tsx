/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { Global } from "@emotion/core";
import { IThemeable, IPageData, IPost } from "@offcourse/interfaces/src";
import { StateProvider, useStateValue } from "./state";
import InnerLayout from "./InnerLayout";
import { SEO } from "@offcourse/molecules";

type PageLayoutProps = IPageData & {
  path: string;
  pageData?: IPost;
} & IThemeable;

const PageLayout: FunctionComponent<PageLayoutProps> = ({
  className,
  children,
  siteMetaData,
  path,
  pageData,
}) => {
  return (
    <StateProvider path={path} siteMetaData={siteMetaData}>
      <SEO path={path} pageData={pageData} siteMetaData={siteMetaData} />
      <Global styles={(theme) => theme.globals} />
      <InnerLayout className={className} siteMetaData={siteMetaData}>
        {children}
      </InnerLayout>
    </StateProvider>
  );
};

export { useStateValue };

export default PageLayout;
