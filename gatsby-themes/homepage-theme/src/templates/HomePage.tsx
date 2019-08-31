import React, { FunctionComponent } from "react";
import { useSiteMetaData, useMeasure, useGetAllSections } from "../hooks";
import PageTemplate from "./Page";
import PageSection from "../components/PageSection";

const HomePageTemplate = ({ className }) => {
  const { title, sections } = useGetAllSections();
  const [{ width, height }, bind] = useMeasure();
  console.log(title);
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

export default HomePageTemplate;
