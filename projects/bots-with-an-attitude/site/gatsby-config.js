module.exports = {
  plugins: [
  "gatsby-plugin-typescript",
  {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
          include: /\.inline\.svg$/,
      },
    },
  },
         "@offcourse/homepage-theme",
         "@offcourse/blog-theme",
  ],
  siteMetadata: {
    author: "Yeehaa",
    description: `My site description...`,
    siteName: "B.W.A",
    social: [
      {
        name: `Twitter`,
        url: "https://twitter.com/yeehaa",
      },
      {
        name: "GitHub",
        url: "https://github.com/offcourse/bots-with-an-attitude",
      },
    ],
    siteName: "Bots with an Attitude",
    title: "Bots with an Attitude",
  },
};
