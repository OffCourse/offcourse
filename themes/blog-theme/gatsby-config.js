const withDefaults = require(`./utils/default-options`);
module.exports = (themeOptions) => {
  const { contentPath, basePath, assetPath } = withDefaults(themeOptions);
  const plugins = [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-theme-ui`,
{
  resolve: `gatsby-plugin-feed`,
  options: {
    query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
    feeds: [
      {
        serialize: ({ query: { site, allBlogPost } }) => {
          return allBlogPost.edges.map((edge) => {
            return Object.assign({}, edge.node.frontmatter, {
              description: edge.node.excerpt,
              date: edge.node.date,
              url: site.siteMetadata.siteUrl + basePath + edge.node.slug,
              guid: site.siteMetadata.siteUrl + basePath + edge.node.slug,
              custom_elements: [{ "content:encoded": edge.node.html }],
            });
          });
        },
        query: `
              {
                allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
                  edges {
                    node {
                      id
                      excerpt
                      slug
                      title
                      date(formatString: "MMMM DD, YYYY")
                      tags
                    }
                  }
                }
              }
            `,
        output: "/rss.xml",
        title: "Your Site's RSS Feed",
        // optional configuration to insert feed reference in pages:
        // if `string` is used, it will be used to create RegExp and then test if pathname of
        // current page satisfied this regular expression;
        // if not provided or `undefined`, all pages will have feed reference inserted
        match: `^${basePath}/`,
      },
    ],
  },
},
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // should this be configurable by the end-user?
              maxWidth: 1380,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_self",
              rel: "nofollow",
            },
          },
          { resolve: `gatsby-remark-footnotes` },
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: `gatsby-remark-smartypants` },
        ],
        remarkPlugins: [require(`remark-slug`)],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentPath,
        name: contentPath,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: assetPath,
        name: assetPath,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ];

  return {
    siteMetadata: {
      siteName: `Generic Site`,
    },
    plugins,
  };
};
