import { graphql, useStaticQuery } from "gatsby";

const useSiteMetaData = () => {
  const data = useStaticQuery(graphql`
    query AllSiteMetaData {
      site {
        siteMetadata {
          siteName
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
  `);
  const { siteName, contactInfo } = data.site.siteMetadata;
  return { siteName, contactInfo };
};

export default useSiteMetaData;
