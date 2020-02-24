/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import PageLayout from "../Page";
import PageSection from "../../components/PageSection";
import { IPageSection } from "@offcourse/interfaces/src/pageSection";
import { wrapperStyles } from "./styles";

type HomepageData = {
  siteName: string;
  contactInfo: any;
  sections: IPageSection[];
};

const HomePageTemplate: FunctionComponent<{ pageContext: HomepageData }> = ({
  pageContext
}) => {
  const { siteName, contactInfo, sections } = pageContext;
  return (
    <PageLayout
      sx={wrapperStyles}
      siteName={siteName}
      contactInfo={contactInfo}
    >
      {sections.map(section => (
        <PageSection key={section.order} {...section} />
      ))}
    </PageLayout>
  );
};

export default HomePageTemplate;
