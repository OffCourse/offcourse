import React, { FunctionComponent } from "react";
import useHomepageData from "../hooks/useHomepageData";
import PageTemplate from "./Page";
import PageSection from "../components/PageSection";
import { IPageSection } from "@offcourse/interfaces/src/pageSection";

const HomePageTemplate: FunctionComponent = () => {
  const { sections }: { sections: IPageSection[] } = useHomepageData();
  return (
    <PageTemplate>
        {sections.map((section) => (
            <PageSection key={section.order} {...section} />))}
    </PageTemplate>
  );
};

export default HomePageTemplate;
