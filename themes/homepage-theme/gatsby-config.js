module.exports = ({
  dataPath = "data",
  shapesPath = "shapes",
  projectImagesPath = "project-images"
}) => ({
  siteMetadata: {
    siteName: `Generic Site`
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: dataPath
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "shapes",
        path: shapesPath
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projectImages",
        path: projectImagesPath
      }
    },
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: ({ node, object, isArray }) => object.role
      }
    }
  ]
});
