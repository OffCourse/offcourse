import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { Hero, Contact } from "../sections";
import { IPageSection, IStylable } from "../interfaces";

type PageSectionProps = {
  sectionData: IPageSection;
};

const components = {
  hero: Hero,
  contact: Contact
};

const PageSection: FunctionComponent<PageSectionProps & IStylable> = ({
  sectionData,
  className
}) => {
  const Component = components[sectionData.role];
  return <Component {...sectionData} className={className} />;
};

export default styled(PageSection)`
  min-height: 80vh;
  &:first-of-type {
    max-height: 100vh;
    height: 100vh;
  }
`;
