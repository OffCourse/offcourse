import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import PageSection from "../components/PageSection";
import PageTemplate from "./Page";

interface IPageSection {
  text: string;
  role: string;
  publishable: boolean;
}

const useGetAllSections = () => {
  const data = useStaticQuery(graphql`
    query allHomePageSections {
      allPageSection {
        edges {
          section: node {
            role
            text
            publishable
          }
        }
      }
    }
  `);
  return data.allPageSection.edges;
};

const HomePageTemplate = ({ className }: { className: string }) => {
  const sections = useGetAllSections();
  return (
    <PageTemplate>
      {sections.map(({ section }: { section: IPageSection }) =>
        section.publishable ? (
          <PageSection key={section.role} {...section} />
        ) : null
      )}
    </PageTemplate>
  );
};

export default HomePageTemplate;
