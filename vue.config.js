const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, "dist"),
        // Required - Routes to render.
        routes: [
          "/blog0",
          "/blog1",
          "/blog1",
          "/blog2",
          "/blog3",
          "/blog4",
          "/blog5",
          "/blog6",
          "/blog7",
          "/blog8",
          "/blog9",
          "/blog10",
          "/blog11",
          "/blog12"
        ]
      })
    ]
  }
};
