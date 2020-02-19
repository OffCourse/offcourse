import React, { FunctionComponent } from "react";
import * as components from "../../sections";
import { IPageSection } from "@offcourse/interfaces/src/pageSection";
import { IThemeable } from "@offcourse/interfaces/src";

const { BaseSection } = components;

type PageSectionProps = IPageSection & IThemeable;

const PageSection: FunctionComponent<PageSectionProps> = ({
  ...sectionData
}) => {
  const Component = components[sectionData.role] || BaseSection;
  // @ts-ignore
  return <Component {...sectionData} />;
};

export default PageSection;
