import React from "react";
import { PageLayout } from "@offcourse/layouts";

const PageTemplate = ({
  children,
  siteName,
  contactInfo
}: {
  children: any;
  siteName: string;
  contactInfo: any;
}) => {
  return (
    <PageLayout siteName={siteName} contactInfo={contactInfo}>
      {children}
    </PageLayout>
  );
};

export default PageTemplate;
