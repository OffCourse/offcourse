/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { ISiteMetaData } from "@offcourse/interfaces/src/pages";
import { Helmet } from "react-helmet";
import { IPost } from "@offcourse/interfaces/src";

const SEO: FunctionComponent<{
  siteMetaData: ISiteMetaData;
  pageData?: IPost;
}> = ({ siteMetaData, pageData }) => {
  const { siteName, siteUrl, description, image } = siteMetaData;
  const seo = {
    title: pageData ? `${pageData.title} | ${siteName}` : siteName,
    description: pageData ? pageData.excerpt : description,
    image: `${siteUrl}${image}`,
    url: pageData ? `${siteUrl}${pageData.slug}` : siteUrl,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {pageData && <meta name="author" content={pageData.author} />}

      <meta property="og:type" content={pageData ? "article" : "website"} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:creator" content={"yeehaa"} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  );
};

export default SEO;
