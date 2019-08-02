import React, { Fragment, useRef, useEffect, useState } from "react";
import PageSection from "../components/PageSection";
import CellularAutomata from "../components/CellularAutomata";
import PageTemplate from "./Page";
import styled from "@emotion/styled";
import { useMeasure, useGetAllSections } from "../hooks";
import { IPageSection } from "../interfaces";

const HomePageTemplate = ({ className }: { className: string }) => {
  const sections = useGetAllSections();
  const [{ width, height }, bind] = useMeasure();
  return (
    <PageTemplate {...bind} className={className}>
      <CellularAutomata width={width} height={height} />
      <div>
        {sections
          .filter(({ publishable }) => publishable)
          .map((section: IPageSection, index: number) => (
            <PageSection key={index} {...section} sectionIndex={index} />
          ))}
      </div>
    </PageTemplate>
  );
};

export default HomePageTemplate;
