import React, { Fragment, FunctionComponent, useEffect } from "react";
import * as components from "../../sections";
import { useStateValue } from "@offcourse/layouts";
import { useVisibility } from "@offcourse/hooks";
import { IPageSection } from "@offcourse/interfaces/src/pageSection";
import { IThemeable } from "@offcourse/interfaces/src";

const { BaseSection } = components;

type PageSectionProps = IPageSection & IThemeable;

const PageSection: FunctionComponent<PageSectionProps> = ({
  ...sectionData
}) => {
  const { role } = sectionData;
  const [isVisible, ref] = useVisibility({
    canLeave: true,
    modTop: "-200px"
  });
  const { registerSection } = useStateValue();
  const Component = components[role] || BaseSection;
  useEffect(() => {
    registerSection({ role, isVisible });
  }, [isVisible, sectionData.role]);
  return (
    <Fragment>
      <Component isVisible={isVisible} {...sectionData} />
      <div ref={ref} />
    </Fragment>
  );
};

export default PageSection;
