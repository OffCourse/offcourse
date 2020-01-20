module.exports = {
  siteMetadata: {
siteName: "B.W.A"
  },
plugins: [
  "@offcourse/homepage-theme",
  {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
          include: /\.inline\.svg$/,
      },
    },
  }],
};
