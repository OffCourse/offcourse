/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { ISiteMetaData } from "@offcourse/interfaces/src/pages";
import { Helmet } from "react-helmet";

const SEO: FunctionComponent<ISiteMetaData> = ({ siteName }) => {
  return (
    <Helmet>
      <meta name="twitter:title" content={siteName} />
      <meta name="twitter:description" content={siteName} />
    </Helmet>
  );
};

export default SEO;
