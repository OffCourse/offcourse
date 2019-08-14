import React, { Fragment, useRef, useEffect, useState } from "react";
import PageSection from "../components/PageSection";
import CellularAutomata from "../components/CellularAutomata";
import PageTemplate from "./Page";
import { useMeasure, useGetAllSections } from "../hooks";
import { IPageSection, IPublishable } from "../interfaces";

const HomePageTemplate = ({ className }: { className: string }) => {
  const sections = useGetAllSections();
  const [{ width, height }, bind] = useMeasure();
  return (
    <PageTemplate {...bind} className={className}>
      <div>
        {sections
          .filter(({ publishable }: IPublishable) => publishable)
          .map((section: IPageSection, index: number) => (
            <PageSection key={index} {...section} sectionIndex={index} />
          ))}
      </div>
    </PageTemplate>
  );
};

export default HomePageTemplate;
