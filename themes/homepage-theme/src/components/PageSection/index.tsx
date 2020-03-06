import React, { Fragment, FunctionComponent, useEffect } from "react";
import * as components from "../../sections";
import { useStateValue } from "@offcourse/layouts";
import { useVisibility } from "../../hooks";
import { IPageSection } from "@offcourse/interfaces/src/pageSection";
import { IThemeable } from "@offcourse/interfaces/src";

const { BaseSection } = components;

type PageSectionProps = IPageSection & IThemeable;

const PageSection: FunctionComponent<PageSectionProps> = ({
  ...sectionData
}) => {
  const { role } = sectionData;
  const [isVisible, Marker] = useVisibility({ canLeave: true });
  const { registerSection } = useStateValue();
  const Component = components[role] || BaseSection;
  useEffect(() => {
    registerSection({ role, isVisible });
  }, [isVisible, sectionData.role]);
  // @ts-ignore
  return (
    <Fragment>
      <Component isVisible={isVisible} {...sectionData} />
      <Marker />
    </Fragment>
  );
};

export default PageSection;
