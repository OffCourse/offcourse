const siteAddress = new URL("https://offcourse-studio.com");

const siteName = "Yeehaa.io";
const description = "my website";

module.exports = {
  siteMetadata: {
    author: "Yeehaa",
    description,
    siteName,
    siteUrl: "https://yeehaa.io",
    social: [
      {
        name: `Twitter`,
        url: "https://twitter.com/yeehaa",
      },
      {
        name: "GitHub",
        url: "https://github.com/offcourse/",
      },
    ],
    title: "Offcourse",
    links: [],
  },
  plugins: [
    "gatsby-plugin-typescript",
    { 
      resolve: "@offcourse/blog-theme",
      options: {
        basePath: "/"
      }
    },
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteName,
        short_name: `Offcourse_`,
        description,
        lang: `en`,
        display: `standalone`,
        icon: `src/icon.png`,
        start_url: `/`,
      },
    },
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "1",
        matomoUrl: "https://offcoursestudio.matomo.cloud",
        siteUrl: "https://offcourse-studio.com",
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "offcourse-studio-website",
        protocol: siteAddress.protocol.slice(0, -1),
        hostname: siteAddress.hostname,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteAddress.href.slice(0, -1),
      },
    },
  ],
};
