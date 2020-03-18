/** @jsx jsx */
import { PageLayout as ParentLayout } from "@offcourse/layouts";
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { FunctionComponent } from "react";

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            siteName
            links {
              href
              title
            }
            callToAction {
              href
              title
            }
            contactInfo {
              street
              zipCode
              city
              country
              email
            }
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

const PageLayout: FunctionComponent = ({ children }) => {
  const siteMetaData = useSiteMetadata();
  return <ParentLayout siteMetaData={siteMetaData}>{children}</ParentLayout>;
};

export default PageLayout;
