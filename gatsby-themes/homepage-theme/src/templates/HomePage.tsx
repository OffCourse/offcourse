import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { useMeasure, useGetAllSections } from "../hooks";
import PageTemplate from "./Page";
import PageSection from "../components/PageSection";
import { IThemeable } from "@offcourse/interfaces";
import { IPageSection } from "@offcourse/interfaces/src/pageSection";

type HomePageTemplateProps = IThemeable;

const HomePageTemplate: FunctionComponent<HomePageTemplateProps> = ({
  className
}) => {
  const { sections }: { sections: IPageSection[] } = useGetAllSections();
  const [{ width, height }, bind] = useMeasure();
  return (
    <PageTemplate {...bind} className={className}>
      <div>
        {sections
          .filter(({ publishable }) => publishable)
          .map((section, index) => (
            <PageSection key={index} {...section} />
          ))}
      </div>
    </PageTemplate>
  );
};

export default styled(HomePageTemplate)``;
