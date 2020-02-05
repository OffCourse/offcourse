module.exports = {
  plugins: [
  {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
          include: /\.inline\.svg$/,
      },
    },
  },
  {
    resolve: `gatsby-theme-blog`,
    options: {
      basePath: `/blog`,
      contentPath: "./data/posts",
      assetPath: "./data/assets",
     },
},
  "@offcourse/homepage-theme",
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
    title: "Bots with an Attitude",
  },
};
