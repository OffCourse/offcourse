import React, { FunctionComponent } from "react";
import { useMeasure, useGetAllSections } from "../hooks";
import PageTemplate from "./Page";
import PageSection from "../components/PageSection";
import { IPageSection } from "@offcourse/interfaces/src/pageSection";

const HomePageTemplate: FunctionComponent<{}> = ({}) => {
  const { sections }: { sections: IPageSection[] } = useGetAllSections();
  const [{ width, height }, bind] = useMeasure();
  return (
    <PageTemplate {...bind}>
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

export default HomePageTemplate;
