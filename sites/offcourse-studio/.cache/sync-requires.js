const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-home-page-js": hot(preferDefault(require("/home/yeehaa/Documents/offcourse/sites/offcourse-studio/src/templates/HomePage.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/yeehaa/Documents/offcourse/sites/offcourse-studio/.cache/dev-404-page.js")))
}

