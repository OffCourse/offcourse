import React, { FunctionComponent } from "react";
import {
  AboutSection,
  BaseSection,
  FooterSection,
  HeroSection,
  ContactSection,
  ProjectsSection,
  ProcessSection
} from "../../sections";
import { IPageSection } from "@offcourse/interfaces/src/pageSection";
import { IThemeable } from "@offcourse/interfaces";

type PageSectionProps = IPageSection & IThemeable;

const PageSection: FunctionComponent<PageSectionProps> = ({
  ...sectionData
}) => {
  switch (sectionData.role) {
    case "about":
      return <AboutSection {...sectionData} />;
    case "hero":
      return <HeroSection {...sectionData} />;
    case "projects":
      return <ProjectsSection {...sectionData} />;
    case "process":
      return <ProcessSection {...sectionData} />;
    case "contact":
      return <ContactSection {...sectionData} />;
    case "footer":
      return <FooterSection {...sectionData} />;
    default:
      return <BaseSection {...sectionData} />;
  }
};

export default PageSection;
