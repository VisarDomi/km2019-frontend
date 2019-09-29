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
          // "/blog0",
          // "/blog1",
          // "/blog1",
          // "/blog2",
          // "/blog3",
          // "/blog4",
          // "/blog5",
          // "/blog6",
          // "/blog7",
          // "/blog8",
          // "/blog9",
          // "/blog10",
          // "/blog11",
          // "/blog12",
          "/blog13",
          "/blog14",
          "/blog15",
          "/blog16",
          "/voto"
        ]
      })
    ],
    output: {
      filename: `app.${Date.now()}.js`,
      chunkFilename: `chunk.${Date.now()}.js`,
    }
  },
  // chainWebpack: config => {
  //   config.output.filename(
  //     process.env.VUE_CLI_MODERN_MODE && !process.env.VUE_CLI_MODERN_BUILD
  //       ? `app-legacy.${Date.now()}.js`
  //       : `app.${Date.now()}.js`
  //   );
  //   config.output.chuckFilename(
  //     process.env.VUE_CLI_MODERN_MODE && !process.env.VUE_CLI_MODERN_BUILD
  //       ? `chuck-legacy.${Date.now()}.js`
  //       : `chuck.${Date.now()}.js`
  //   );
  // },
  css: {
    extract: {
      filename: `app.${Date.now()}.css`,
      chunkFilename: `chunk.${Date.now()}.css`,
    }
  }
};
