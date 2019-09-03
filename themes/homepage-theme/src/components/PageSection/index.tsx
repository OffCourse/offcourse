import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import {
  HeroSection,
  ContactSection,
  BaseSection,
  FooterSection
} from "../../sections";
import { IPageSection } from "@offcourse/interfaces/src/pageSection";

type PageSectionProps = IPageSection;

const PageSection: FunctionComponent<PageSectionProps> = ({
  ...sectionData
}) => {
  switch (sectionData.role) {
    case "hero":
      return <HeroSection {...sectionData} />;
    case "contact":
      return <ContactSection {...sectionData} />;
    case "footer":
      return <FooterSection {...sectionData} />;
    default:
      return <BaseSection {...sectionData} />;
  }
};

export default PageSection;
