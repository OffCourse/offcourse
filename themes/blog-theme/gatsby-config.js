module.exports = ({
  basePath = "data",
  contentPath = "homepage",
  projectImagesPath = "project-images",
}) => {
    const plugins = [
`gatsby-plugin-typescript`,
{
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
modules: ["gatsby-theme-blog-core"]
      }
    },

  {
      resolve: `gatsby-theme-blog-core`,
      options: {
        basePath: `/blog`,
        contentPath: "./data/posts",
        assetPath: "./data/assets"
      },
    },
      `gatsby-plugin-theme-ui`,
    ];

    return {
      siteMetadata: {
      siteName: `Generic Site`,
       },
      plugins: true ? [...plugins] : plugins
    };
  };
