/** @jsx jsx */
import { PageLayout as ParentLayout } from "@offcourse/layouts";
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";
import { IPost } from "@offcourse/interfaces/src";

const PageLayout: FunctionComponent<{ post: IPost }> = ({ children, post }) => {
  const siteMetaData = {
    siteName: "TEST",
    links: [],
    siteUrl: "TEST",
    description: "TEST",
    callToAction: { href: "", title: "test" },
    callToActionVisible: false,
    image: "TEST",
    contactInfo: {
      street: "TEST",
      zipCode: "TEST",
      city: "TEST",
      country: "TEST",
      email: "TEST",
    },
  };
  return (
    <ParentLayout path="/" siteMetaData={siteMetaData} post={post}>
      {children}
    </ParentLayout>
  );
};

export default PageLayout;
