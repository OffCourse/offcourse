import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const useGetAllSections = () => {
  const data = useStaticQuery(graphql`
    query allHomePageSections {
      allPageSection {
        edges {
          section: node {
            id
            role
            text
          }
        }
      }
    }
  `);
  return data.allPageSection.edges;
};

interface IPageSection {
  id: string;
  text: string;
  role: string;
}

const PageSection = ({ id, text }: IPageSection) => <p key={id}>{text}</p>;

const HomePageTemplate = () => {
  const sections = useGetAllSections();
  console.log(sections);
  return (
    <div>
      {sections.map(({ section }: { section: IPageSection }) => (
        <PageSection {...section} />
      ))}
    </div>
  );
};

export default HomePageTemplate;
