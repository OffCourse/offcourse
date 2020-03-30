const siteAddress = new URL("https://offcourse-studio.com");

module.exports = {
  siteMetadata: {
    author: "Yeehaa",
    description: `My site description...`,
    siteName: `Offcourse Studio_`,
    description:
      "From a personalized learning coach to a network of virtual assistants, technology can help you focus on critical challenges rather than waste energy on uninspiring tasks. Think about it. What could you achieve if you have creative AI to support you? Offcourse Studio works with you to develop technology that works for you.",
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
