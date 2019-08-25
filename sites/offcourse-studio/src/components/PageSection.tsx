import React, { FunctionComponent, ReactNode } from "react";
import styled from "@emotion/styled";
import { Hero, Contact } from "../sections";
import { IStylable } from "../interfaces";
import { IPageSection } from "../interfaces/pageSection";

type PageSectionProps = {
  sectionData: IPageSection;
};

const components: { [key: string]: ReactNode } = {
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
  min-height: 85vh;
  &:first-of-type {
    max-height: 100vh;
    height: 100vh;
  }
`;
