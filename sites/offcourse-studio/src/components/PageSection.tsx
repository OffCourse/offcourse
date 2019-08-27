import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { HeroSection, ContactSection, BaseSection } from "../sections";
import { IThemeable } from "../interfaces";
import { IPageSection } from "../interfaces/pageSection";

type PageSectionProps = IPageSection & IThemeable;

const PageSection: FunctionComponent<PageSectionProps> = ({
  ...sectionData
}) => {
  switch (sectionData.role) {
    case "hero":
      return <HeroSection {...sectionData} />;
    case "contact":
      return <ContactSection {...sectionData} />;
    default:
      return <BaseSection {...sectionData} />;
  }
};

export default styled(PageSection)`
  min-heght: 85vh;
  &:first-of-type {
    max-height: 100vh;
    height: 100vh;
  }
`;
