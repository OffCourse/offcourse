const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-home-page-tsx": hot(preferDefault(require("/home/yeehaa/Documents/offcourse/gatsby-themes/homepage-theme/src/templates/HomePage.tsx")))
}

