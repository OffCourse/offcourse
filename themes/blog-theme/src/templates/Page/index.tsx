/** @jsx jsx */
import { PageLayout as ParentLayout } from "@offcourse/layouts";
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";

const PageLayout: FunctionComponent = ({ children }) => {
  const siteMetaData = {
    siteName: "TEST",
    links: [],
    siteUrl: "TEST",
    description: "TEST",
    callToAction: { href: "", title: "test" },
    callToActionVisible: false,
    ogImage: "TEST",
    contactInfo: {
      street: "TEST",
      zipCode: "TEST",
      city: "TEST",
      country: "TEST",
      email: "TEST",
    },
  };
  return (
    <ParentLayout path="/" siteMetaData={siteMetaData}>
      {children}
    </ParentLayout>
  );
};

export default PageLayout;
