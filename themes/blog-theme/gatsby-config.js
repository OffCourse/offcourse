const withDefaults = require(`./utils/default-options`);

module.exports = themeOptions => {
  const { contentPath, assetPath } = withDefaults(themeOptions);
  const plugins = [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // should this be configurable by the end-user?
              maxWidth: 1380,
              linkImagesToOriginal: false
            }
          },
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: `gatsby-remark-smartypants` }
        ],
        remarkPlugins: [require(`remark-slug`)]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentPath,
        name: contentPath
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: assetPath,
        name: assetPath
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ];

  return {
    siteMetadata: {
      siteName: `Generic Site`
    },
    plugins
  };
};
