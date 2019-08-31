module.exports = {
  plugins: [
    "@offcourse/homepage-theme",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "data"
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: "pageSection"
      }
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-typescript`
  ]
};
