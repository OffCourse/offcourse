import React, { FunctionComponent } from "react";
import { useMeasure } from "../hooks";
import useHomepageData from "../hooks/useHomepageData";
import PageTemplate from "./Page";
import PageSection from "../components/PageSection";
import { IPageSection } from "@offcourse/interfaces/src/pageSection";

const HomePageTemplate: FunctionComponent<{}> = ({}) => {
  const { sections }: { sections: IPageSection[] } = useHomepageData();
  const [{ width, height }, bind] = useMeasure();
  return (
    <PageTemplate {...bind}>
      <div>
        {sections
          .filter(({ publishable }) => publishable)
          .sort((a, b) => a.order - b.order)
          .map((section, index) => (
            <PageSection key={index} {...section} />
          ))}
      </div>
    </PageTemplate>
  );
};

export default HomePageTemplate;
