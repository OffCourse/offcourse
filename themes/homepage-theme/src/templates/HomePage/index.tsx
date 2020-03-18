/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import PageLayout from "../Page";
import PageSection from "../../components/PageSection";
import { wrapperStyles } from "./styles";
import { IHomePageData } from "@offcourse/interfaces/src/pages";
import { usePageSections } from "./hooks";

type HomePageTemplateProps = {
  pageContext: IHomePageData;
  path: string;
};

const HomePageTemplate: FunctionComponent<HomePageTemplateProps> = ({}) => {
  const sections = usePageSections();
  return (
    <PageLayout sx={wrapperStyles}>
      {sections.map((section: any) => (
        <PageSection key={section.order} {...section} />
      ))}
    </PageLayout>
  );
};

export default HomePageTemplate;
