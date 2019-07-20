import { graphql, useStaticQuery } from "gatsby";
import React, { createRef, useState } from "react";
import PageSection from "../components/PageSection";
import PageTemplate from "./Page";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { animated, useSpring } from "react-spring";
import styled from "@emotion/styled";
import { Waypoint } from "react-waypoint";

interface IPageSection {
  slogan: string;
  explanation: string;
  role: string;
  publishable: boolean;
}

const useGetAllSections = () => {
  const data = useStaticQuery(graphql`
    query allHomePageSectionsx {
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
  const [activePages, setActivePages] = useState({});
  let parallaxRef: any = createRef();
  return (
    <PageTemplate>
      <Parallax ref={ref => (parallaxRef = ref)} pages={sections.length}>
        {sections.map((_: never, index: number) => {
          return (
            <StyledLayer key={index} offset={index} speed={1} factor={1}>
              <Waypoint
                onEnter={() =>
                  setActivePages({ ...activePages, [index]: true })
                }
                onLeave={() =>
                  index && setActivePages({ ...activePages, [index]: false })
                }
              />
            </StyledLayer>
          );
        })}

        {sections.map(({ section }: any, index: number) => {
          const isOn = activePages[index];
          const { x, ...animation } = useSpring({
            opacity: isOn ? 1 : 0,
            x: isOn ? 0 : 100
          });
          return (
            <ParallaxLayer key={index} offset={index} speed={0.5} factor={1}>
              <animated.div
                style={{
                  ...animation,
                  transform: x.interpolate(x => `translate3d(${x}%, 0, 0)`)
                }}
              >
                <PageSection {...section} />
              </animated.div>
            </ParallaxLayer>
          );
        })}
      </Parallax>
    </PageTemplate>
  );
};

export default HomePageTemplate;
