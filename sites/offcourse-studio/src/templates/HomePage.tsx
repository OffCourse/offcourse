import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import themes from "@offcourse/themes";

const GlobalStyle = createGlobalStyle(themes.offcourse);

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

const Layout = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HomePageTemplate = () => {
  const sections = useGetAllSections();
  return (
    <Layout>
      <GlobalStyle />
      {sections.map(({ section }: { section: IPageSection }) => (
        <PageSection key={section.role} {...section} />
      ))}
    </Layout>
  );
};

export default HomePageTemplate;
