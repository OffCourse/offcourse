const siteAddress = new URL("https://offcourse-studio.com");

const siteName = "Offcourse Studio_";
const description =
  "From a personalized learning coach to a network of virtual assistants, technology can help you focus on critical challenges rather than waste energy on uninspiring tasks. Think about it. What could you achieve if you have creative AI to support you? Offcourse Studio works with you to develop technology that works for you.";

module.exports = {
  siteMetadata: {
    author: "Yeehaa",
    description,
    siteName,
    siteUrl: "https://offcourse-studio.com",
    contactInfo: {
      street: "Schiemond 20-22",
      zipCode: "3024EE",
      city: "Rotterdam",
      country: "The Netherlands",
      email: "contact@offcourse.io",
    },
    callToAction: {
      title: "contact us",
      href: "#ContactSection",
    },
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
    links: [
      {
        title: "home",
        href: "/",
      },
      {
        title: "blog",
        href: "/blog",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-typescript",
    "@offcourse/homepage-theme",
    "@offcourse/blog-theme",
    "@offcourse/presentation-theme",
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
