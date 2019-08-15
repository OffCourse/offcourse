import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import Hero from "./Hero";
import { IPageSection, IStylable } from "../interfaces";

type PageSectionProps = {
  sectionData: IPageSection;
};

const PageSection: FunctionComponent<PageSectionProps & IStylable> = ({
  sectionData,
  className
}) => {
  return <Hero {...sectionData} className={className} />;
};

export default styled(PageSection)`
  min-height: 70vh;
  max-height: 90vh;

  &:only-child {
    max-height: 100vh;
    height: 100vh;
  }
`;
