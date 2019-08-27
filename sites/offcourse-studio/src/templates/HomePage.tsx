import React, { FunctionComponent } from "react";
import PageSection from "../components/PageSection";
import PageTemplate from "./Page";
import { useMeasure, useGetAllSections } from "../hooks";
import { IPageSection, IPublishable, IStylable } from "../interfaces";

const HomePageTemplate: FunctionComponent<IStylable> = ({ className }) => {
  const sections = useGetAllSections();
  const [{ width, height }, bind] = useMeasure();
  return (
    <PageTemplate {...bind} className={className}>
      <div>
        {sections
          .filter(({ publishable }: IPublishable) => publishable)
          .map((section: IPageSection, index: number) => (
            <PageSection key={index} {...section} />
          ))}
      </div>
    </PageTemplate>
  );
};

export default HomePageTemplate;
