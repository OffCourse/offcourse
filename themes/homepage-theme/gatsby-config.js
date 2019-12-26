module.exports = ({
  basePath = "data",
  contentPath = "content",
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
/**
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "shapes",
        path: `${basePath}/${shapesPath}`
      }
    },
**/
