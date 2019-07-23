import React, { createRef, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import PageSection from "../components/PageSection";
import PageTemplate from "./Page";

interface IPageSection {
  slogan: string;
  explanation: string;
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
            slogan
            explanation
            publishable
          }
        }
      }
    }
  `);
  return data.allPageSection.edges.map(({ section }) => section);
};

const HomePageTemplate = ({ className }: { className: string }) => {
  const sections = useGetAllSections();
  return (
    <PageTemplate className={className}>
      {sections
        .filter(({ publishable }) => publishable)
        .map((section: IPageSection, index: number) => (
          <PageSection key={index} {...section} sectionIndex={index} />
        ))}
    </PageTemplate>
  );
};

export default HomePageTemplate;
