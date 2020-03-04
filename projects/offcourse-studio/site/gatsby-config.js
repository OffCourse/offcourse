const siteAddress = new URL("https://offcourse-studio.com");

module.exports = {
  siteMetadata: {
    author: "Yeehaa",
    description: `My site description...`,
    siteName: `Offcourse Studio_`,
    contactInfo: {
      street: "Schiemond 20-22",
      zipCode: "3024EE",
      city: "Rotterdam",
      country: "The Netherlands",
      email: "contact@offcourse.io"
    },
    callToAction: {
      title: "contact us",
      href: "#ContactSection"
    },
    links: [
      {
        title: "home",
        href: "/"
      },
      {
        title: "blog",
        href: "/blog"
      },
      {
        title: "decks",
        href: "/presentations"
      }
    ],
    social: [
      {
        name: `Twitter`,
        url: "https://twitter.com/yeehaa"
      },
      {
        name: "GitHub",
        url: "https://github.com/offcourse/"
      }
    ],
    title: "Offcourse"
  },
  plugins: [
    "gatsby-plugin-typescript",
    "@offcourse/homepage-theme",
    "@offcourse/blog-theme",
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "offcourse-studio-website",
        protocol: siteAddress.protocol.slice(0, -1),
        hostname: siteAddress.hostname
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteAddress.href.slice(0, -1)
      }
    }
  ]
};
