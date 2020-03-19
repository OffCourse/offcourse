/** @jsx jsx */
import { PageLayout as ParentLayout } from "@offcourse/layouts";
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";

const PageLayout: FunctionComponent = ({ children }) => {
  const siteMetaData = {
    siteName: "TEST",
    links: [],
    callToAction: { href: "", title: "test" },
    callToActionVisible: false,
    contactInfo: {
      street: "TEST",
      zipCode: "TEST",
      city: "TEST",
      country: "TEST",
      email: "TEST"
    }
  };
  return <ParentLayout siteMetaData={siteMetaData}>{children}</ParentLayout>;
};

export default PageLayout;
