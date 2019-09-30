const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---themes-homepage-theme-src-templates-home-page-tsx": hot(preferDefault(require("/home/yeehaa/Documents/offcourse/themes/homepage-theme/src/templates/HomePage.tsx")))
}

