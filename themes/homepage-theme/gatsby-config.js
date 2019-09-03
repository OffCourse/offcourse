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
    `gatsby-plugin-emotion`,
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
        typeName: "HomePage"
      }
    }
  ]
};
