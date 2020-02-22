/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import useHomepageData from "../../hooks/useHomepageData";
import PageTemplate from "../Page";
import PageSection from "../../components/PageSection";
import { Footer, Header } from "@offcourse/molecules";
import { IPageSection } from "@offcourse/interfaces/src/pageSection";
import { wrapperStyles } from "./styles";

const HomePageTemplate: FunctionComponent = () => {
  const {
    sections,
    siteName,
    contactInfo
  }: {
    sections: IPageSection[];
    siteName: string;
    contactInfo: any;
  } = useHomepageData();
  return (
    <PageTemplate sx={wrapperStyles}>
      <Header />
      {sections.map(section => (
        <PageSection key={section.order} {...section} />
      ))}
      <Footer siteName={siteName} contactInfo={contactInfo} />
    </PageTemplate>
  );
};

export default HomePageTemplate;
