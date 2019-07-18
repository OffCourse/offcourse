import { graphql, useStaticQuery } from "gatsby";
import React, { createRef } from "react";
import PageSection from "../components/PageSection";
import PageTemplate from "./Page";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import styled from "@emotion/styled";

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
  return data.allPageSection.edges;
};

const StyledLayer = styled(ParallaxLayer)`
  &:nth-of-type(even) {
    color: red;
    background-color: white;
  }

  &:nth-of-type(odd) {
    color: white;
    background-color: red;
  }
  &:nth-of-type(1) {
    color: white;
    background-color: pink;
  }
`;

const HomePageTemplate = ({ className }: { className: string }) => {
  const sections = useGetAllSections();
  let parallaxRef: any = createRef();

  return (
    <PageTemplate>
      <Parallax ref={ref => (parallaxRef = ref)} pages={sections.length}>
        {sections.map((_: never, index: number) => {
          return (
            <StyledLayer key={index} offset={index} speed={1} factor={1} />
          );
        })}

        {sections.map(({ section }: any, index: number) => {
          return (
            <ParallaxLayer key={index} offset={index} speed={0.5} factor={1}>
              <PageSection {...section} />
            </ParallaxLayer>
          );
        })}
      </Parallax>
    </PageTemplate>
  );
};

export default HomePageTemplate;
