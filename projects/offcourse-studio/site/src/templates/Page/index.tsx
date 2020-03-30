/** @jsx jsx */
import { PageLayout as ParentLayout } from "@offcourse/layouts";
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { FunctionComponent } from "react";

export const useSiteMetadata = () => {
  const { site, ogImageDefault } = useStaticQuery(
    graphql`
      query SiteMetaData {
        ogImageDefault: file(absolutePath: { regex: "/assets/cover-image/" }) {
          childImageSharp {
            fixed(height: 630, width: 1200) {
              src
            }
          }
        }
        site {
          siteMetadata {
            siteName
            siteUrl
            description
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
  return { ...site.siteMetadata, image: ogImageDefault.childImageSharp.fixed.src };
};

const PageLayout: FunctionComponent<{ path: string }> = ({
  children,
  ...rest
}) => {
  const siteMetaData = useSiteMetadata();
  return (
    <ParentLayout siteMetaData={siteMetaData} {...rest}>
      {children}
    </ParentLayout>
  );
};

export default PageLayout;
