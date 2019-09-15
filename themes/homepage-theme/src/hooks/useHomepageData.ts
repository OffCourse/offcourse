import { graphql, useStaticQuery } from "gatsby";

const useHomepageData = () => {
  const data = useStaticQuery(graphql`
    query AllHomepageData {
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
  const sections = data.allPageSection.edges.map(({ node }) => node);
  return {
    siteName: "generic brand", sections
  }
};

export default useHomepageData;
