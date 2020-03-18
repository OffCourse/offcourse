import { useStaticQuery, graphql } from "gatsby";

const usePageSections = () => {
  const { allPageSection } = useStaticQuery(
    graphql`
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
                projects {
                  title
                  description
                }
              }
              ... on ProfileSection {
                skills {
                  title
                  description
                }
              }
              ... on ProcessSection {
                steps {
                  title
                  description
                }
              }
              ... on ContactSection {
                callToAction
                form {
                  title
                  fields {
                    name
                    label
                    placeholder
                    type
                    options {
                      value
                      label
                    }
                  }
                }
              }
              ... on FooterSection {
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
        }
      }
    `
  );
  const rawSections = allPageSection.edges.map(({ node }: any) => node);
  const sections = rawSections
    .filter(({ publishable }: any) => publishable)
    .sort((a: any, b: any) => a.order - b.order);
  return sections;
};

export { usePageSections };
