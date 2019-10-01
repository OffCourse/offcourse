import { graphql, useStaticQuery } from "gatsby";

const useHomepageData = () => {
  const data = useStaticQuery(graphql`
    query AllHomepageData {
         site {
          siteMetadata {
            siteName
          }
        }
        allPageSection {
          edges {
            node {
              id
              backdropPath
              order
              publishable
              role
              title
              description
              ... on ProjectsSection {
                ...ProjectsData
              }
              ... on ProfileSection {
                ...ProfileData
              }
              ... on ProcessSection {
                ...StepsData
              }
              ... on ContactSection {
                callToAction
                ...FormData
              }
              ... on FooterSection {
                ...ContactInfoData
              }
            }
          }
        }
     }
  `);
  const { siteName } = data.site.siteMetadata;
  const sections = data.allPageSection.edges.map(({ node }) => node);
  return {
    siteName, sections
  }
};

export default useHomepageData;
