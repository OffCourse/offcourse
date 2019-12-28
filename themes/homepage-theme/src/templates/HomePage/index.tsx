/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import useHomepageData from "../../hooks/useHomepageData";
import PageTemplate from "../Page";
import PageSection from "../../components/PageSection";
import { IPageSection } from "@offcourse/interfaces/src/pageSection";
import { wrapperStyles } from "./styles";

const HomePageTemplate: FunctionComponent = () => {
  const { sections }: { sections: IPageSection[] } = useHomepageData();
  return (
    <PageTemplate sx={wrapperStyles}>
        {sections.map((section) => (
            <PageSection key={section.order} {...section} />))}
    </PageTemplate>
  );
};

export default HomePageTemplate;
