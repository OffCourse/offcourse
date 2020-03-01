/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import PageLayout from "../Page";
import PageSection from "../../components/PageSection";
import { wrapperStyles } from "./styles";
import { useAppState } from "@offcourse/hooks";
import { IHomePageData } from "@offcourse/interfaces/src/pages";

type HomePageTemplateProps = {
  pageContext: IHomePageData;
  path: string;
};

const HomePageTemplate: FunctionComponent<HomePageTemplateProps> = ({
  pageContext
}) => {
  const { sections, siteMetaData } = pageContext;
  const { appMode, toggleMenu } = useAppState();
  return (
    <PageLayout
      mode={appMode}
      toggleMenu={toggleMenu}
      sx={wrapperStyles}
      siteMetaData={siteMetaData}
    >
      {sections.map(section => (
        <PageSection key={section.order} {...section} />
      ))}
    </PageLayout>
  );
};

export default HomePageTemplate;
