import React, { FunctionComponent } from "react";
import {
  HeroSection,
  ContactSection,
  ProjectsSection,
  BaseSection,
  FooterSection
} from "../../sections";
import { IPageSection } from "@offcourse/interfaces/src/pageSection";
import { IThemeable } from "@offcourse/interfaces";

type PageSectionProps = IPageSection & IThemeable;

const PageSection: FunctionComponent<PageSectionProps> = ({
  ...sectionData
}) => {
  switch (sectionData.role) {
    case "hero":
      return <HeroSection {...sectionData} />;
    case "projects":
      return <ProjectsSection {...sectionData} />;
    case "contact":
      return <ContactSection {...sectionData} />;
    case "footer":
      return <FooterSection {...sectionData} />;
    default:
      return <BaseSection {...sectionData} />;
  }
};

export default PageSection;
