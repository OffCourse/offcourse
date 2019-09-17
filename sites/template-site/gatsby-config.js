module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-notes`,
      options: {
        basePath: `/notes`,
        contentPath: "data/notes",
        mdx: true
      }
    },
    "@offcourse/homepage-theme"
  ]
};
