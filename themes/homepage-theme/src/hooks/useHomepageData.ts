import { graphql, useStaticQuery } from "gatsby";
import { IPageSection } from "@offcourse/interfaces/src/pageSection";

const useHomepageData = () => {
  const data = useStaticQuery(graphql`
    query AllHomepageData {
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
  const { siteName, contactInfo } = data.site.siteMetadata;
  const rawSections: IPageSection[] = data.allPageSection.edges.map(
    ({ node }: { node: IPageSection }) => node
  );
  const sections = rawSections
    .filter(({ publishable }) => publishable)
    .sort((a, b) => a.order - b.order);

  return { siteName, contactInfo, sections };
};

export default useHomepageData;
