// module.exports = ({ contentPath = "data" }) => ({
//   plugins: [
//     `gatsby-plugin-emotion`,
//     `gatsby-plugin-typescript`,
//     {
//       resolve: "gatsby-source-filesystem",
//       options: {
//         path: contentPath
//       }
//     },
//     {
//       resolve: "gatsby-transformer-yaml",
//       options: {
//         typeName: "HomePage"
//       }
//     }
//   ]
// });

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
      resolve: `gatsby-source-instagram`,
      options: {
        username: `yeehaa12345`
      }
    },
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: "HomePage"
      }
    }
  ]
};
