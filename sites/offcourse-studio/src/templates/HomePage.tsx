import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import themes from "@offcourse/themes";
import PageSection from "../components/PageSection";

const GlobalStyle = createGlobalStyle(themes.offcourse);

interface IPageSection {
  text: string;
  role: string;
}

const useGetAllSections = () => {
  const data = useStaticQuery(graphql`
    query allHomePageSections {
      allPageSection {
        edges {
          section: node {
            role
            text
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
    <ThemeProvider theme={themes.offcourse}>
      <div className={className}>
        <GlobalStyle />
        {sections.map(({ section }: { section: IPageSection }) => (
          <PageSection key={section.role} {...section} />
        ))}
      </div>
    </ThemeProvider>
  );
};

export default styled(HomePageTemplate)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;
