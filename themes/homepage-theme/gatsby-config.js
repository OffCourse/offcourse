module.exports = ({
  basePath = "data",
  contentPath = "content",
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
        path: `${basePath}/${contentPath}`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "shapes",
        path: `${basePath}/${shapesPath}`
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
        typeName: ({  object }) => object.role
      }
    }
  ]
});
