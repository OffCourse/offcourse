import React from "react";
import {
  graphql,
  useStaticQuery
} from 'gatsby';

const useGetAllSections = () => {
  const data = useStaticQuery(graphql `
    query allHomePageSections {
      allPageSection {
        edges {
          node {
            id
            sectionRole
            text
          }
        }
      }
    }`);
  return data.allPageSection.edges;
};

const HomePageTemplate = () => {
  const sections = useGetAllSections();
  return (
    <div>
      {sections.map(({node}) => (<p key={node.id}>{node.text}</p>))}
    </div>
  );
};

export default HomePageTemplate;
