import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { Hero, CallToAction } from "./sections";
import { IPageSection, IStylable } from "../interfaces";

type PageSectionProps = {
  sectionData: IPageSection;
};

const components = {
  hero: Hero,
  "call-to-action": CallToAction
};

const PageSection: FunctionComponent<PageSectionProps & IStylable> = ({
  sectionData,
  className
}) => {
  const Component = components[sectionData.role];
  return <Component {...sectionData} className={className} />;
};

export default styled(PageSection)`
  min-height: 90vh;
  max-height: 90vh;

  &:only-child {
    max-height: 100vh;
    height: 100vh;
  }
`;
