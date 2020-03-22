module.exports = ({
  basePath = "data",
  contentPath = "homepage",
  projectImagesPath = "project-images"
}) => {
  const plugins = [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-catch-links`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${basePath}/${contentPath}`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projectImages",
        path: `${basePath}/${projectImagesPath}`
      }
    },
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: ({ object }) => object.role
      }
    },
    `gatsby-plugin-theme-ui`
  ];

  return {
    siteMetadata: {
      siteName: `Generic Site`
    },
    plugins
  };
};
