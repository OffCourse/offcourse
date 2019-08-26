import React, { FunctionComponent, ReactNode } from "react";
import styled from "@emotion/styled";
import { Hero, Contact, Base } from "../sections";
import { IThemeable } from "../interfaces";
import { IPageSection } from "../interfaces/pageSection";

type PageSectionProps = {
  sectionData: IPageSection;
} & IThemeable;

const PageSection: FunctionComponent<PageSectionProps> = ({
  sectionData,
  className
}) => {
  switch (sectionData.role) {
    case "hero":
      return <Hero {...sectionData} className={className} />;
    case "contact":
      return <Contact {...sectionData} className={className} />;
    default:
      return <Base {...sectionData} className={className} />;
  }
};

export default styled(PageSection)`
  min-heght: 85vh;
  &:first-of-type {
    max-height: 100vh;
    height: 100vh;
  }
`;
