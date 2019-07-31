import React, { Fragment, useRef, useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import PageSection from "../components/PageSection";
import CellularAutomata from "../components/CellularAutomata";
import PageTemplate from "./Page";
import ResizeObserver from "resize-observer-polyfill";
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
  return data.allPageSection.edges.map(({ section }) => section);
};
const useMeasure = () => {
  const ref = useRef();
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  );
  useEffect(() => {
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  return [bounds, { ref }];
};

const HomePageTemplate = ({ className }: { className: string }) => {
  const sections = useGetAllSections();
  const [{ width, height }, bind] = useMeasure();
  console.log(width, height);
  return (
    <Fragment>
      <CellularAutomata width={width} height={height} />
      <PageTemplate {...bind} className={className}>
        {sections
          .filter(({ publishable }) => publishable)
          .map((section: IPageSection, index: number) => (
            <PageSection key={index} {...section} sectionIndex={index} />
          ))}
      </PageTemplate>
    </Fragment>
  );
};

export default HomePageTemplate;
