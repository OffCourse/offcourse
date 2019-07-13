module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "data"
      }
    },
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: "pageSection"
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`
  ]
};
