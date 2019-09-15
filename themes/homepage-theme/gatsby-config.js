module.exports = {
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "data"
      }
    },
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: ({ node, object, isArray }) => object.role
      }
    }
  ]
};
