module.exports = ({
  basePath = "data",
  contentPath = "homepage",
  projectImagesPath = "project-images"
}) => {
  const plugins = [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: ["gatsby-theme-mdx-deck"]
      }
    },

    {
      resolve: "gatsby-theme-mdx-deck",
      options: {
        basePath: `/presentations`,
        contentPath: "./data/decks"
      }
    },
    `gatsby-plugin-theme-ui`
  ];

  return {
    siteMetadata: {
      siteName: `Generic Site`
    },
    plugins: true ? [...plugins] : plugins
  };
};
